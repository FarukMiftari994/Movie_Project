import Cards from "../Components/Cards";
import { Okej } from "../@types";

type Props = {
  popular: Okej[];
};

function Dashboard({ popular }: Props) {
  return (
    <>
      <div className="d-flex justify-content-around row p-5">
        {popular.map((populars) => {
          return <Cards key={populars.id} populars={populars} />;
        })}
      </div>
    </>
  );
}

export default Dashboard;
