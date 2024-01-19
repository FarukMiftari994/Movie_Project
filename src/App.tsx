import NavBar from "./Components/NavBar";
// import Footer from "./Components/Footer";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { useEffect, useState } from "react";

import Sidebar from "./Components/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Popular from "./pages/Popular.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import { useEffect, useState } from "react";
import { CardProvider } from "./context/CardContext.tsx";
import Favourites from "./pages/Favourites.tsx";
import { Okej } from "./@types/index.ts";
import { AuthContextProvider } from "./context/AuthContext.tsx";

function App(): JSX.Element {
  const [popular, setPopular] = useState<Okej[]>([]);
  const [nowPlaying, setNowPlaying] = useState<Okej[]>([]);
  console.log("characters app :>> ", popular);

  async function fetchData() {
    try {
      // const response = await fetch(
      //   // "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=1ac353c571e268ba328e411672d94ff8"
      //   "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=1ac353c571e268ba328e411672d94ff8"
      // );
      // const result = await response.json();
      // console.log(result);
      // setCharacters(result.results);
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
  }, []);

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
