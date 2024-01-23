import { createContext, useState, ReactNode } from "react";
import { Okej } from "../@types";

interface CardContextType {
  addToFavourites: (populars: Okej) => void;
  removeFromFavourites: (populars: Okej) => void;
  items: Okej[];
}

const CardContext = createContext<CardContextType>({} as CardContextType);

export function CardProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Okej[]>([]);
  const addToFavourites = (populars: Okej) => {
    setItems((prevState) => [...prevState, populars]);
  };
  const removeFromFavourites = (populars: Okej) => {
    setItems((prevState) => prevState.filter((item) => item !== populars));
  };

  return (
    <CardContext.Provider
      value={{ items, addToFavourites, removeFromFavourites }}
    >
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;
