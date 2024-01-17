// import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { FaStar } from "react-icons/fa";
import "./DetailsModal.css";

function DetailsModal({
  show,
  handleClose,
  play,
}: {
  show: any;
  handleClose: any;
  play?: any;
}) {
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header className="d-flex flex-row">
        <img src={`https://image.tmdb.org/t/p/w500${play.poster_path}`} />
        <div className="ps-3">
          <Modal.Title className="text-black">
            <b>{play.name}</b>
          </Modal.Title>
          <Modal.Title className="text-black">
            <b>{play.first_air_date}</b>
          </Modal.Title>
          <Modal.Title className="text-black d-flex align-items-center">
            <FaStar />
            <b>{play.vote_average} /10</b>
          </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body
        className="text-black d-flex justify-content-center"
        style={{
          padding: "15px",
        }}
      >
        {play.overview}
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="outline-dark" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DetailsModal;
