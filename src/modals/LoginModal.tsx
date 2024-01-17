// import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import "./LoginModal.css";
import Form from "react-bootstrap/Form";

function LoginModal({ show, handleClose }: { show: any; handleClose: any }) {
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Body>
        <div className="d-flex justify-content-center">
          <Modal.Header>Sign In</Modal.Header>
        </div>
        <div>
          <Form className="d-flex justify-content-center">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" autoFocus />
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="outline-dark" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
