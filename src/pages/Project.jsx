import React from "react";
import Header from "../components/Header";
import { Col, Row } from "react-bootstrap";

function Project() {
    return (
        <>
            <Header />

            <div className="d-flex justify-content-center align-items-center flex-column mt-5">
                <h1>All Project</h1>
                <div className="d-flex mt-4 mb-4 w-25 align-items-center">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="search the projects using technologies"
                    />
                    <i
                        class="fa-solid fa-magnifying-glass fa-rotate-90 fa-xl"
                        style={{ marginLeft: "-45px" }}
                    ></i>{" "}
                </div>

                <Row>
                    <Col sm={3} md={6} lg={4}></Col>
                </Row>
            </div>
        </>
    );
}

export default Project;
