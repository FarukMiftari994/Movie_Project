import NavBar from "./Components/NavBar";
// import Footer from "./Components/Footer";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "./Components/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Popular from "./pages/Popular.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import { useEffect, useState } from "react";
import { CardProvider } from "./context/CardContext.tsx";
import Favourites from "./pages/Favourites.tsx";
import { Okej } from "./@types/index.ts";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { db } from "./pages/firebase.ts";
import { collection, onSnapshot, query } from "firebase/firestore";

function App(): JSX.Element {
  const [popular, setPopular] = useState<Okej[]>([]);
  const [nowPlaying, setNowPlaying] = useState<Okej[]>([]);
  const [cart, setCart] = useState([]);
  console.log("oooooo", cart);

  async function fetchData() {
    try {
      Promise.all([
        fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=1ac353c571e268ba328e411672d94ff8"
        ).then((value) => value.json()),
        fetch(
          "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=1ac353c571e268ba328e411672d94ff8"
        ).then((value) => value.json()),
        // fetch().then(value => value.json()),
        // fetch().then(value => value.json()),
      ])
        .then((value) => {
          console.log(value);
          setPopular(value[0].results);
          setNowPlaying(value[1].results);
          //json response
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData().catch((e) => console.log(e));
    // It's a function used for real-time updates from a Firestore collection. It takes a query and a callback function.
    // The callback function is executed whenever there is a change in the specified Firestore collection.
    const unsubscribe = onSnapshot(
      query(collection(db, "favourites")),
      (querySnapshot) => {
        const p: any = [];
        querySnapshot.forEach((doc) => {
          p.push(doc.data());
          popular.map((i) => {
            if (i.id === doc.data().id) {
              i.favourites = true;
            }
          });
        });
        setCart(p);
      }
    );
    return () => unsubscribe();
  }, []);

  // const addtocart = (item: any) => {
  //   popular.map((i) => {
  //     if (i.id === item.id) {
  //       i.cart = true;
  //     }
  //   });
  //   const docRef = doc(collection(db, "cart"), `${item.id}`);
  //   updateDoc(docRef, item);
  // };
  // const removetocart = (item: any) => {
  //   popular.map((i) => {
  //     if (i.id === item.id) {
  //       i.cart = false;
  //     }
  //   });
  //   const docRef = doc(collection(db, "cart"), `${item.id}`);
  //   deleteDoc(docRef);
  // };

  return (
    <>
      <Router>
        <AuthContextProvider>
          <NavBar popular={popular} />
          <Sidebar>
            <CardProvider>
              <Routes>
                <Route path="/" element={<Dashboard popular={popular} />} />
                <Route
                  path="/popular"
                  element={<Popular nowPlaying={nowPlaying} />}
                />
                <Route path="/favourites" element={<Favourites />} />
              </Routes>
            </CardProvider>
          </Sidebar>
        </AuthContextProvider>
      </Router>

      {/* <Footer now_playing={now_playing} /> */}
    </>
  );
}

export default App;
