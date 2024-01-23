import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example({ show, handleClose5 }: { show: any; handleClose5: any }) {
  return (
    <Modal show={show} onHide={handleClose5}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose5}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose5}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Example;
