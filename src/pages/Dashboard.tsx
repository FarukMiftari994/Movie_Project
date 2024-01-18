import Cards from "../Components/Cards";
import CardContext from "../Components/CardContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Okej } from "../@types";

type Props = {
  popular: Okej[];
};

function Dashboard({ popular }: Props) {
  const { items } = useContext(CardContext);
  return (
    <>
      <div className="d-flex justify-content-around row p-5">
        {popular.map((populars) => {
          return <Cards key={populars.id} populars={populars} />;
        })}
        <Link to={"/Favourites"}>
          <h1>{items.length}</h1>
        </Link>
      </div>
    </>
  );
}

export default Dashboard;
