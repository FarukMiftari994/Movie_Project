import { Okej } from "../@types";
import Cards from "../Components/Cards";

function Popular({ nowPlaying }: { nowPlaying: Okej[] }): JSX.Element {
  return (
    <div className="d-flex justify-content-around row p-5">
      {nowPlaying.map((play) => {
        return <Cards key={play.id} populars={play} />;
      })}
    </div>
  );
}

export default Popular;
