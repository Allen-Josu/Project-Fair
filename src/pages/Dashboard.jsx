import React from "react";
import Header from "../components/Header";
import MyProject from "../components/MyProject";
import { Col, Row } from "react-bootstrap";
import Profile1 from "../components/Profile1";

function Dashboard() {
    return (
        <>
            <Header dashboard />

            <h3 className="ms-5 mt-4">
                Welcome <span style={{ color: "orange" }}>User</span>{" "}
            </h3>
            <Row className="m-4">
                <Col md={8}>
                    <MyProject />
                </Col>
                <Col md={4}>
                    <Profile1 />
                </Col>
            </Row>
        </>
    );
}

export default Dashboard;
