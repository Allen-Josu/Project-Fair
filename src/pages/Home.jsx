import React from "react";
import { Col, Row } from "react-bootstrap";
import image from "../assets/designer.gif";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div>
                <div
                    className="container-fluid rounded"
                    style={{
                        width: "100%",
                        height: "100vh",
                        background: "#6abe08",
                    }}
                >
                    <Row className="align-items-center p-5">
                        <Col sm={12} md={6}>
                            <h1
                                className="text-light"
                                style={{ fontSize: "80px" }}
                            >
                                Project Fair
                            </h1>
                            <p style={{ color: "black", fontSize: "18px" }}>
                                One stop destination for all software
                                development Projects.
                            </p>
                            <Link to="/login" className="btn rounded btn-success">
                                Get Started{" "}
                                <i class="fa-solid fa-arrow-right ms-3"></i>
                            </Link>
                        </Col>
                        <Col sm={12} md={6} style={{ marginTop: "100px" }}>
                            <img className="w-75" src={image} alt="no-image" />
                        </Col>
                    </Row>
                </div>
            </div>

            {/* SECTION FOR ALL PROJECTS */}

            <div className="mt-5 ">
                <div className=" text-center">
                    <h1>Explore our Projects</h1>
                    <marquee scrollAmount={20} className="mt-5">

                        <div className="d-flex">

                            <div className=" ms-5" style={{ width: "500px" }}>
                                <ProjectCard />
                            </div>

                            <div className=" ms-5" style={{ width: "500px" }}>
                                <ProjectCard />
                            </div>

                            <div className=" ms-5" style={{ width: "500px" }}>
                                <ProjectCard />
                            </div>
                        </div>

                    </marquee>

                    <div className="mt-5 mb-4">
                        <Link to="/project" className="text-danger ">See More Projects</Link>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Home;
