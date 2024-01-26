// import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { FaStar } from "react-icons/fa";
import "./DetailsModal.css";
import { Okej } from "../@types";
import Model from "../modals/CommentsModal";
import { useState } from "react";

function DetailsModal({
  show,
  handleClose,
  populars,
}: {
  show: any;
  handleClose: any;
  populars: Okej;
}) {
  const [shows, setShows] = useState(false);
  const handleShow5 = () => setShows(true);
  const handleClose5 = () => setShows(false);
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header className="d-flex flex-row">
        <img src={`https://image.tmdb.org/t/p/w500${populars.poster_path}`} />
        <div className="ps-3">
          <Modal.Title className="text-black">
            <b>
              {populars.title}
              {populars.name}
            </b>
          </Modal.Title>
          <Modal.Title className="text-black">
            <b>
              {populars.release_date}
              {populars.first_air_date}
            </b>
          </Modal.Title>
          <Modal.Title className="text-black d-flex align-items-center">
            <FaStar />
            <b>{populars.vote_average} /10</b>
          </Modal.Title>
          <Button
            variant="outline-dark"
            style={{ marginTop: "10px" }}
            onClick={handleShow5}
          >
            See Comments
          </Button>
        </div>
      </Modal.Header>
      <Modal.Body
        className="text-black d-flex justify-content-center"
        style={{
          padding: "15px",
        }}
      >
        {populars.overview}
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="outline-dark" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
      <Model show={shows} handleClose5={handleClose5} />
    </Modal>
  );
}

export default DetailsModal;
