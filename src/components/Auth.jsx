import React from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.png";
import Form from "react-bootstrap/Form";

function Auth({ register }) {
    const registerForm = register ? true : false;
    return (
        <>
            <div className="justify-content-center d-flex align-items-center m-5">
                <div className="container w-75">
                    <Link to="/" style={{ color: "#007fff" }}>
                        <i class="fa-solid fa-arrow-right fa-rotate-180 fa-xl"></i>{" "}
                        Back to home
                    </Link>
                    <div
                        className="w-100  d-flex justify-content-center rounded p-5"
                        style={{ background: "#6abe08" }}
                    >
                        <div className="col-lg-6 ms-5">
                            <img src={login} alt="login" width={"90%"} />
                        </div>
                        <div className="col-lg-6 p-3">
                            <h1 className=" text-center text-light">
                                <i class="fa-brands fa-stack-overflow fa-2x pb-4 me-3"></i>
                                Project Fair
                            </h1>
                            <p
                                className="text-center text-light"
                                style={{ fontSize: "18px" }}
                            >
                                {registerForm
                                    ? "Sign up to your Account"
                                    : "  Sign up to your Account"}
                            </p>
                            <div className="d-flex justify-content-center align-items-center">
                                <Form className="mt-5 w-75">
                                    {registerForm && (
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="text"
                                                placeholder="Username"
                                            />
                                        </Form.Group>
                                    )}
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="email"
                                            placeholder="Email id"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </Form.Group>
                                    {registerForm ? (
                                        <div>
                                            <button
                                                className="btn rounded mt-3"
                                                style={{
                                                    backgroundColor: "#ffd700",
                                                    color: "black",
                                                }}
                                            >
                                                Register
                                            </button>
                                            <p className="mt-3 text-light">
                                                Already a User ? Click here to{" "}
                                                <Link
                                                    to="/login"
                                                    style={{ color: "#191970" }}
                                                >
                                                    Login
                                                </Link>
                                            </p>
                                        </div>
                                    ) : (
                                        <div>
                                            <button
                                                className="btn  rounded mt-3"
                                                style={{
                                                    backgroundColor: "#ffd700",
                                                    color: "black",
                                                }}
                                            >
                                                Login
                                            </button>
                                            <p className="mt-3 text-light">
                                                New User ? Click here to{" "}
                                                <Link
                                                    to="/register"
                                                    style={{ color: "#191970" }}
                                                >
                                                    Register
                                                </Link>
                                            </p>
                                        </div>
                                    )}
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Auth;
