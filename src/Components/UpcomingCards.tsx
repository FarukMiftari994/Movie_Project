// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import Model3 from "../modals/DetailsModal";
import { FaStar } from "react-icons/fa";

function BasicExample({ play }: { play: any }): JSX.Element {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      className="p-0"
      style={{
        width: "260px",
        height: "490px",
        margin: "30px",
        border: "white 2px solid",
        borderRadius: "20px",
      }}
    >
      <Card.Img
        src={`https://image.tmdb.org/t/p/w500${play.poster_path}`}
        style={{
          width: "256px",
          height: "360px",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
        }}
        onClick={handleShow}
      />
      <ListGroup variant="flush">
        <div>
          <ListGroup.Item className="d-flex justify-content-center align-items-center">
            <FaStar />
            <b>{play.vote_average}</b>
          </ListGroup.Item>
        </div>
        <ListGroup.Item
          className="d-flex justify-content-center"
          style={{
            borderBottomRightRadius: "20px",
            borderBottomLeftRadius: "20px",
            height: "87px",
          }}
        >
          <b>{play.title}</b>
        </ListGroup.Item>
      </ListGroup>
      <Model3 show={show} handleClose={handleClose} populars={play} />
    </div>
  );
}

export default BasicExample;
