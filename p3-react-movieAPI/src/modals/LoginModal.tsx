// import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import AuthForm from "../context/AuthForm";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Tab, Tabs } from "react-bootstrap";

function LoginModal({ show, handleClose }: { show: any; handleClose: any }) {
  const { login, signup } = useContext(AuthContext);

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <div className="d-flex justify-content-center p-5">
        <div>
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3 d-flex justify-content-center ndroje"
          >
            <Tab eventKey="profile" title="SIGN IN">
              <AuthForm
                submitTitle="Login"
                submit={login}
                handleClose={handleClose}
              />
            </Tab>
            <Tab eventKey="home" title="SIGN UP">
              <AuthForm
                submitTitle="Sign Up"
                submit={signup}
                handleClose={handleClose}
              />
            </Tab>
          </Tabs>

          <Modal.Footer className="d-flex justify-content-center">
            <Button variant="outline-dark" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </div>
    </Modal>
  );
}

export default LoginModal;
