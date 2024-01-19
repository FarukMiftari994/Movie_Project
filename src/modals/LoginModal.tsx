// import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import AuthForm from "../context/AuthForm";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function LoginModal({ show, handleClose }: { show: any; handleClose: any }) {
  const { login } = useContext(AuthContext);
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <div className="d-flex justify-content-center">
        <Modal.Header>Sign In</Modal.Header>
        <AuthForm submitTitle="Login" submit={login} />
      </div>

      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="outline-dark" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
