import { useContext } from "react";
import CardContext from "../context/CardContext";
import Cards from "../Components/Cards";

function Favourites(): JSX.Element {
  const { items } = useContext(CardContext);
  const uniqueItems = Array.from(new Set(items.map((item) => item.id))).map(
    (id) => items.find((item) => item?.id === id)
  );

  return (
    <>
      <div className="d-flex justify-content-around row p-5">
        {uniqueItems.map((item) => {
          return item ? <Cards key={item.id} populars={item} /> : null;
        })}
      </div>
    </>
  );
}
export default Favourites;
