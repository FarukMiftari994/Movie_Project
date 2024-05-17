import { useContext, useEffect } from "react";
import CardContext from "../context/CardContext";
import Cards from "../Components/Cards";
import { AuthContext } from "../context/AuthContext";

function Favourites(): JSX.Element {
  const { items, getFavoritesFromDb, titleArray } = useContext(CardContext);
  const { user } = useContext(AuthContext);
  const uniqueItems = Array.from(new Set(items.map((item) => item.id))).map(
    (id) => items.find((item) => item?.id === id)
  );
  const checkIfIsFavorite = (movieTitle: string | undefined) => {
    if (typeof movieTitle === "string") {
      return titleArray.includes(movieTitle) ? true : false;
    }
    return false;
  };
  useEffect(() => {
    getFavoritesFromDb();
  }, [user?.email]);

  return (
    <>
      <div className="d-flex justify-content-around row p-5">
        {uniqueItems.map((item) => {
          const movieTitle = item?.title ? item?.title : item?.name;

          return item ? (
            <Cards
              key={item.id}
              populars={item}
              isFav={checkIfIsFavorite(movieTitle)}
            />
          ) : null;
        })}
      </div>
    </>
  );
}
export default Favourites;
