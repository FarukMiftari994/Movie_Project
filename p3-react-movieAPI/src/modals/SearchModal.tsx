// import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import "./DetailsModal.css";
import SearchCards from "../Components/SearchCards";
import { Okej } from "../@types";

type Props = {
  show: any;
  handleClose: any;
  popular: Okej[];
};
function SearchModal({ show, handleClose, popular }: Props) {
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header className="d-flex flex-row" closeButton>
        Search
      </Modal.Header>
      <Modal.Body
        className="text-black d-flex justify-content-center"
        style={{
          padding: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Search for a Movie"
          style={{ width: "100%" }}
        />
        <Button variant="outline-dark ms-2">Search</Button>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center p-1"></Modal.Footer>
      <div className="d-flex row m-2">
        {popular.map((searchPopular) => {
          return (
            <SearchCards key={searchPopular.id} searchPopular={searchPopular} />
          );
        })}
      </div>
    </Modal>
  );
}

export default SearchModal;
