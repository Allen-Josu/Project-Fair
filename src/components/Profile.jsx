import React from "react";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

function Profile() {
    const [open, setOpen] = useState(false);
    return (
        
            <div className="card card-shadow p-5">
                <div className="d-flex justify-content-between">
                    <h1> Profile</h1>
                    <button
                        onClick={() => setOpen(!open)}
                        className="btn btn-outline-info"
                    >
                        <i class="fa-solid fa-chevron-down fa-lg"></i>
                    </button>
                </div>

                <Collapse in={open}>
                    <div className="d-flex justify-content-center flex-column" >
                        <label
                            htmlFor="profile"
                            className="d-flex justify-content-center "
                        >
                            <input
                                type="file"
                                id="profile"
                                style={{ display: "none" }}
                            />
                            <img
                                src="https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg"
                                alt=""
                                width={"250px"}
                                height={"300px"}
                            />
                        </label>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Github"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Link"
                            />
                        </div>
                        <div className="mb-3">
                            <button
                                className="btn btn-success w-100 rounded"
                                style={{ backgroundColor: "#6abe08" }}
                            >
                                {" "}
                                Update
                            </button>
                        </div>
                    </div>
                </Collapse>
            </div>
        
    );
}

export default Profile;
