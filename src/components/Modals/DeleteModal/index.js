import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function DeleteModal({ show, onHide, onConfirm }) {
    return (
        <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Xác nhận xóa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Bạn có chắc chắn muốn xóa</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Không
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    Chắc chắn
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteModal;
