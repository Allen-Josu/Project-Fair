import React from "react";
import AddProject from "./AddProject";

function MyProject() {
    return (
        <>
            <div className="card shadow pt-5 ms-3 me-3">
                <div className="d-flex ">
                    <h3 className="text-success ms-3">My Projects</h3>
                    <div className="ms-auto">
                        <AddProject />
                    </div>
                </div>
                <div className="mt-5">
                    <div className="border d-flex align-items-center rounded p-1">
                        <h3>Project Title</h3>
                        <div className="ms-auto">
                            <button className="btn ">
                                <i class="fa-solid fa-pen-to-square text-info fa-lg"></i>{" "}
                            </button>
                            <button className="btn ">
                                <i class="fa-brands fa-github fa-lg text-success"></i>
                            </button>

                            <button className="btn ">
                                <i class="fa-solid fa-trash fa-lg text-danger "></i>
                            </button>
                        </div>
                    </div>
                    <p className="text-danger fw-bold m-3">No Project uploaded yet</p>
                </div>
            </div>
        </>
    );
}

export default MyProject;
