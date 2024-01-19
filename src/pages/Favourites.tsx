import { useContext } from "react";
import CardContext from "../context/CardContext";
import CardsFavourites from "../Components/CardsFavourites";

function Favourites(): JSX.Element {
  const { items } = useContext(CardContext);
  console.log("this is it", items);
  return (
    <div className="d-flex justify-content-around row p-5">
      {items.map((item) => {
        return <CardsFavourites key={item.id} item={item} />;
      })}
    </div>
  );
}
export default Favourites;
