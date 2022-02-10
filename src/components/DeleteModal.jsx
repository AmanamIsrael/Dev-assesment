import React from "react";
import { Button, Modal, Spinner } from "react-bootstrap";

const DeleteModal = ({ show, handleClose, handleDelete, loading }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleDelete}>
          Delete{" "}
          {loading && <Spinner animation="border" size="sm" variant="light" />}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
