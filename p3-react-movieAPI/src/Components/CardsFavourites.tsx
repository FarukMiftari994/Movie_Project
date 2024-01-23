// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import Model from "../modals/DetailsModal";
import { FaStar } from "react-icons/fa";
// import { Okej } from "../@types";
import { useContext } from "react";
import CardContext from "../context/CardContext";
import { IoClose } from "react-icons/io5";
import { Button } from "react-bootstrap";

function BasicExample({ item }: { item: any }): JSX.Element {
  // console.log("this is the item", item);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { removeFromFavourites } = useContext(CardContext);
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
        }}
      >
        <div className="item">
          <Button
            variant="danger"
            className="notify-badge"
            onClick={() => removeFromFavourites(item)}
            style={{ cursor: "pointer" }}
          >
            <IoClose style={{ marginBottom: "3.5px" }} />
          </Button>

          <div>
            <Card.Img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              style={{
                width: "256px",
                height: "360px",
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
              }}
              onClick={handleShow}
            />
            <Button className="button" onClick={handleShow}>
              Learn More
            </Button>
          </div>
          <ListGroup variant="flush">
            <div>
              <ListGroup.Item className="d-flex justify-content-center align-items-center">
                <FaStar />
                <b>{item.vote_average}</b>
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
                {item.name}
                {item.title}
              </b>
            </ListGroup.Item>
          </ListGroup>
          <Model show={show} handleClose={handleClose} populars={item} />
        </div>
      </div>
    </>
  );
}

export default BasicExample;
