import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ProjectImages from "../assets/project1.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className="shadow text-center" style={{ width: "100%" }} onClick={handleShow}>
                <Card.Img variant="top" src={ProjectImages} />
                <Card.Body>
                    <Card.Title>Vedio Player</Card.Title>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you are reading this text in a modal!
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ProjectCard;
