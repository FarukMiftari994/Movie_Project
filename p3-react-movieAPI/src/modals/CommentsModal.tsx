import Modal from "react-bootstrap/Modal";

function Example({ show, handleClose5 }: { show: any; handleClose5: any }) {
  return (
    <Modal show={show} onHide={handleClose5}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>To Be Continued</Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default Example;
