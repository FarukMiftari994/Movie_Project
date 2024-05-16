import Cards from "../Components/Cards";
import { Okej } from "../@types";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import CardContext from "../context/CardContext";

type Props = {
  popular: Okej[];
};

function Dashboard({ popular }: Props) {
  // function checkIfItisFav(popular: { title: string | undefined }) {
  //   if (popular.title) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  const { user } = useContext(AuthContext);
  const { getFavoritesFromDb, setTitleArray, titleArray } =
    useContext(CardContext);

  console.log("user :>> ", user);

  const checkIfIsFavorite = (movieTitle: string) => {
    return titleArray.includes(movieTitle) ? true : false;
  };
  useEffect(() => {
    getFavoritesFromDb();
  }, [user?.email]);

  return (
    <>
      <div className="d-flex justify-content-around row p-5">
        {popular.map((populars) => {
          // const isFav = checkFavoritedState(populars.title);
          const movieTitle = populars.title ? populars.title : populars.name;
          return (
            <Cards
              key={populars.id}
              populars={populars}
              isFav={checkIfIsFavorite(movieTitle)}
            />
          );
        })}
      </div>
    </>
  );
}

export default Dashboard;
