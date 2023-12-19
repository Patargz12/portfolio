import React from "react";
import "./education.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Education() {

    return(
        <>

        <div className="d-flex flex-column">
            <div  className="education-one my-4 justify-content-between d-flex flex-column">
                <div className="d-flex flex-column new-one">
                    <span className="university-name">
                        University of the East - Caloocan
                    </span>
                </div>
                <div>
                    <span className="university-degree">
                        Junior - Senior High School
                    </span>
                </div>{" "}
                <div className="my-2">
                    <span className="year-passedout">
                        2014 - 2020
                    </span>
                </div>

            </div>
            <div  className="education-one my-4 justify-content-between d-flex flex-column">
                <div className="d-flex flex-column new-one">
                    <span className="university-name">
                        University of the East  - Caloocan
                    </span>
                </div>
                <div>
                    <span className="university-degree">
                        Bachelors of Science in Information Technology 
                    </span>
                </div>{" "}
                <div className="my-2">
                    <span className="year-passedout">
                        2020 - 2024
                    </span>
                </div>

            </div>

        </div>
        </>
    );
}
