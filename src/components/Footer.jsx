import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div
                className="d-flex justify-content-evenly text-light p-5"
                style={{
                    background: "#6abe08",
                }}
            >
                <div
                    className="d-flex flex-column text-fair"
                    style={{ maxWidth: "20%" }}
                >
                    <div className="d-flex ms-3  ">
                        <i class="fa-brands fa-stack-overflow fa-2x"></i>{" "}
                        <h3 className="ms-3 text-light">Project Fair</h3>
                    </div>
                    <div className="mt-2">
                        <p style={{ textAlign: "justify" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Expedita quia, possimus ad facere amet, quas
                            mollitia eos numquam, iure error natus dolores?
                            Minus commodi veritatis laborum rem architecto
                            officia praesentium!
                        </p>
                    </div>
                </div>

                <div className="d-flex flex-column ">
                    <h3 className="text-light">PRODUCTS</h3>
                    <Link
                        to="register"
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontSize: "18px",
                            color: "white",
                        }}
                    >
                        Angular
                    </Link>
                    <Link
                        to="register"
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontSize: "18px",
                            color: "white",
                        }}
                    >
                        Angular
                    </Link>
                    <Link
                        to="register"
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontSize: "18px",
                            color: "white",
                        }}
                    >
                        Angular
                    </Link>
                </div>
                <div className="d-flex flex-column">
                    <h3 className="text-light">LINKS</h3>
                    <Link
                        to="/project"
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontSize: "18px",
                            color: "white",
                        }}
                    >
                        Projects
                    </Link>
                    <Link
                        to="login"
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontSize: "18px",
                            color: "white",
                        }}
                    >
                        Login
                    </Link>
                    <Link
                        to="register"
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontSize: "18px",
                            color: "white",
                        }}
                    >
                        Register
                    </Link>
                </div>
                <div className="d-flex flex-column">
                    <h3 className="text-light">CONTACT</h3>
                    <p>email : projectfair @gmail.com</p>
                    <p>phone : 91 9497831393</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
