import React, { useContext } from "react";
import CardContext from "../Components/CardContext";
import CardsFavourites from "../Components/CardsFavourites";

function Favourites(): JSX.Element {
  const { items }: { items: any } = useContext(CardContext);
  console.log("this is it", items);
  return (
    <div>
      <h2>Favourites</h2>

      {items.map((item) => {
        return <CardsFavourites key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Favourites;
