// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import Model from "../modals/DetailsModal";
import { FaStar } from "react-icons/fa";

interface BasicExampleProps {
  character: any;
}

const BasicExample: React.FC<BasicExampleProps> = ({ character }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className="p-0"
      style={{
        width: "260px",
        height: "430px",
        margin: "30px",
        border: "white 2px solid",
        borderRadius: "20px",
      }}
      onClick={handleShow}
    >
      <Card.Img
        src={`https://image.tmdb.org/t/p/w500${character.poster_path}`}
        style={{
          width: "256px",
          height: "350px",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
        }}
      />
      <ListGroup variant="flush">
        <div>
          <ListGroup.Item className="d-flex justify-content-center align-items-center">
            <b>{character.vote_average}</b>
            <FaStar />
          </ListGroup.Item>
        </div>
        <ListGroup.Item
          className="d-flex justify-content-center"
          style={{
            borderBottomRightRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
        >
          <b>{character.name}</b>
        </ListGroup.Item>
      </ListGroup>
      <Model show={show} handleClose={handleClose} character={character} />
    </div>
  );
};

export default BasicExample;
