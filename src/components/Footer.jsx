import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div
                className="d-flex justify-content-between  p-5"
                style={{ backgroundColor: "#fffff4", borderRadius: "20px" }}
            >
                <div className="d-flex flex-column" style={{ maxWidth: "20%" }}>
                    <div className="d-flex ms-3 align-items-center ">
                    <i class="fa-light fa-user-group fa-xl"></i>
                        <h3 className="ms-3">COMPANY NAME</h3>
                    </div>
                    <div className="mt-2">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Expedita quia, possimus ad facere amet, quas
                            mollitia eos numquam, iure error natus dolores?
                            Minus commodi veritatis laborum rem architecto
                            officia praesentium!
                        </p>
                    </div>
                </div>

                <div className="d-flex flex-column">
                    <h3>PRODUCTS</h3>
                    <Link
                        to="register"
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontSize: "18px",
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
                        }}
                    >
                        Angular
                    </Link>
                </div>
                <div className="d-flex flex-column">
                    <h3>LINKS</h3>
                    <Link
                        to="/projects"
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontSize: "18px",
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
                        }}
                    >
                        Register
                    </Link>
                </div>
                <div className="d-flex flex-column">
                    <h3>CONTACT</h3>
                    <p>email : projectfair @gmail.com</p>
                    <p>phone : 91 9497831393</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
