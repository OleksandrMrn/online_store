import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const AlertError = ({ show, onHide, message }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="center">
          {message}
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertError;
