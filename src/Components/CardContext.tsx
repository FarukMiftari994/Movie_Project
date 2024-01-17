import { createContext, useState } from "react";

interface CardContextType {
  items: any;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export function CardProvider({ children }) {
  const [items, setItems] = useState([]);
  const addToFavourites = (populars) => {
    setItems((prevState) => [...prevState, { populars }]);
  };
  return (
    <CardContext.Provider value={{ items, addToFavourites }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;
