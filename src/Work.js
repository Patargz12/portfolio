import React from "react";
import "./work.css";

export default function Work() {
  return (
    <>
      <div className="work-inside-new mx-2 my-4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">
              University of the East - Caloocan{" "}
            </span>
            <span className="year-passedout">2019 - 2020</span>
          </div>
        </div>

        <div className="d-flex flex-column">
          <span className="position">Robotics Instructor</span>
          <span className="description-position">
            <ul>
              <li>
                It is an immersion wherein I was tasked to assist and teach the
                Grade 11 students about how to program and control a robotic
                device.
              </li>
            </ul>
          </span>
        </div>

        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">Google Developer Student Club</span>
            <span className="year-passedout">2023 - Present</span>
          </div>
        </div>

        <div className="d-flex flex-column">
          <span className="position">Mobile Development Lead</span>
          <span className="description-position">
            <ul>
              <li>
                Created a blog site using React JS and learnt to establish
                partnerships with IT companies.
              </li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}
