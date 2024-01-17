import UpcomingCards from "../Components/UpcomingCards";

function About({ nowPlaying }: { nowPlaying: any }): JSX.Element {
  return (
    <div className="d-flex justify-content-around row p-5">
      {nowPlaying.map((play) => {
        return <UpcomingCards key={play.id} play={play} />;
      })}
    </div>
  );
}

export default About;
