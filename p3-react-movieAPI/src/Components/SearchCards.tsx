import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import "./SearchCards.css";
import { useState } from "react";
import Model from "../modals/DetailsModal";
import { Okej } from "../@types";

function SearchCards({ searchPopular }: { searchPopular: Okej }): JSX.Element {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card.Body className="p-2">
        <img
          src={`https://image.tmdb.org/t/p/w500${searchPopular.poster_path}`}
          alt=""
          style={{ width: "80px", height: "80px" }}
          onClick={handleShow}
        />
        <div className="ps-2">
          <Card.Title>{searchPopular.title}</Card.Title>
          <Card.Title className="text-black d-flex align-items-center pt-2">
            <FaStar />
            {searchPopular.vote_average}/10
          </Card.Title>
        </div>
      </Card.Body>
      <Model show={show} handleClose={handleClose} populars={searchPopular} />
    </div>
  );
}

export default SearchCards;
