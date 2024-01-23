// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import Model from "../modals/DetailsModal";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useContext } from "react";
import CardContext from "../context/CardContext";
import { Okej } from "../@types";
import { AuthContext } from "../context/AuthContext";
import { Button } from "react-bootstrap";

function BasicExample({ populars }: { populars: Okej }): JSX.Element {
  const { addToFavourites } = useContext(CardContext);
  const [show, setShow] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const { user } = useContext(AuthContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButtonClick = () => {
    addToFavourites(populars);
    setIsButtonClicked(true);
  };

  return (
    <>
      <div
        className="p-0"
        style={{
          width: "260px",
          height: "490px",
          margin: "30px",
          border: "white 2px solid",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      >
        <div className="item">
          {user && (
            <Button
              variant="danger"
              className="notify-badge"
              onClick={handleButtonClick}
              style={{
                cursor: "pointer",
                opacity: isButtonClicked ? "0" : "",
              }}
            >
              <FaHeart style={{ marginBottom: "3.5px" }} />
            </Button>
          )}

          <div>
            <Card.Img
              src={`https://image.tmdb.org/t/p/w500${populars.poster_path}`}
              style={{
                width: "256px",
                height: "360px",
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
              }}
            />

            {user && (
              <Button className="button" onClick={handleShow}>
                Learn More
              </Button>
            )}
          </div>
          <ListGroup variant="flush">
            <div>
              <ListGroup.Item className="d-flex justify-content-center align-items-center">
                <FaStar />
                <b>{populars.vote_average}</b>
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
              <b>
                {populars.name}
                {populars.title}
              </b>
            </ListGroup.Item>
          </ListGroup>
          <Model show={show} handleClose={handleClose} populars={populars} />
        </div>
      </div>
    </>
  );
}

export default BasicExample;
