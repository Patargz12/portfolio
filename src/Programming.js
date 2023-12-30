import React from "react";
import "./programming.css";

export default function Programming() {
  const value = [
    {
      text: "Javascript",
      percetage: 50,
    },
    {
      text: "Java",
      percetage: 80,
    },
    {
      text: "C#",
      percetage: 80,
    },
    {
      text: "Python",
      percetage: 80,
    },
    {
      text: "PHP",
      percetage: 10,
    },
    {
      text: "C++",
      percetage: 10,
    },
  ];

  return (
    <>
      <div>
        <div className="row">
          {value.map((value, index) => {
            return (
              <>
                <div className="col-lg-6 col-mg-6 col-sm-12 my-2">
                  <span className="language">{value.text}</span>
                  <div className="progress-some">
                    <div
                      className="progress-new"
                      style={{ width: "${value.percetage}" }}
                    ></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
