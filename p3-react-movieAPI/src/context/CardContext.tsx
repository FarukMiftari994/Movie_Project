import { createContext, useState, ReactNode, useContext } from "react";
import { Okej } from "../@types";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
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
  const { user } = useContext(AuthContext);
  const addToFavourites = async (populars: Okej) => {
    if (!user) {
      return;
    }
    try {
      setItems((prevState) => [...prevState, populars]);
      const docRef = doc(db, "favourites", populars.id + "");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        await updateDoc(docRef, {
          favourites: arrayUnion(user.uid),
        });
      } else {
        const title = populars.title ? populars.title : populars.name;
        await setDoc(docRef, { favourites: [user.uid], name: title });
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
      const docRef = doc(collection(db, "favourites"), `${populars.id}`);
      await updateDoc(docRef, {
        favourites: arrayRemove(user.uid),
      });
      // const docSnap = await getDoc(docRef);

      // if (docSnap.exists()) {
      //   await deleteDoc(docRef);
      // } else {
      //   console.warn("Document not found for removal:", populars);
      // }
    } catch (error) {
      console.error("Error removing from favourites:", error);
    }
  };

  return (
    <CardContext.Provider
      value={{
        items,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;
