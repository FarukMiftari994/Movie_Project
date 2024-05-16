import { createContext, useState, ReactNode, useContext } from "react";
import { Okej } from "../@types";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../pages/firebase";
import { AuthContext } from "./AuthContext";

interface CardContextType {
  addToFavourites: (populars: Okej) => Promise<void>;
  removeFromFavourites: (populars: Okej) => Promise<void>;
  items: Okej[];
}

const CardContext = createContext<CardContextType>({} as CardContextType);

export function CardProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Okej[]>([]);
  const [titleArray, setTitleArray] = useState<String[]>([]);
  const { user } = useContext(AuthContext);
  const addToFavourites = async (populars: Okej) => {
    if (!user) {
      return;
    }
    try {
      setItems((prevState) => [...prevState, populars]);
      const title = populars.title ? populars.title : populars.name;
      const docRef = doc(
        db,
        "favourites",
        user.email + "",
        "movies",
        title + ""
      );
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        await updateDoc(docRef, {
          id: populars.id,
          title: title,
          poster_path: populars.poster_path,
          vote_average: populars.vote_average,
        });
      } else {
        const title = populars.title ? populars.title : populars.name;

        await setDoc(docRef, {
          id: populars.id,
          title: title,
          poster_path: populars.poster_path,
          vote_average: populars.vote_average,
        });
      }
    } catch (error) {
      console.error("Error removing from favourites:", error);
    }
  };

  const removeFromFavourites = async (populars: Okej) => {
    try {
      if (!user) {
        return;
      }
      setItems((prevState) => prevState.filter((item) => item !== populars));
      const title = populars.title ? populars.title : populars.name;
      const docRef = doc(
        db,
        "favourites",
        user.email + "",
        "movies",
        title + ""
      );
      await deleteDoc(docRef);
      getFavoritesFromDb();
    } catch (error) {
      console.error("Error removing from favourites:", error);
    }
  };

  const getFavoritesFromDb = async () => {
    if (!user) {
      console.log("no user");
      return;
    }
    // const docRef = doc(db, "favourites", user.email , "movies");
    const querySnapshot = await getDocs(
      collection(db, "favourites", user.email!, "movies")
    );
    let favMovieTitleArray: string[] = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());

      favMovieTitleArray.push(doc.data().title);
    });
    console.log("favMovieTitleArray :>> ", favMovieTitleArray);
    setTitleArray(favMovieTitleArray);

    // const docSnap = await getDoc(docRef);
    // console.log("docSnap :>> ", docSnap);
  };
  return (
    <CardContext.Provider
      value={{
        items,
        addToFavourites,
        removeFromFavourites,
        getFavoritesFromDb,
        titleArray,
        setTitleArray,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;
