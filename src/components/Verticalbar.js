import React from "react";

function Verticalbar() {
  return (
    <div
      style={{ backgroundColor: "#5FBDFF", height: "81vh" }}
      className="ps-3"
    >
      <div className="pt-5">
        <a
          href="/student/profile"
          style={{ textDecoration: "none", color: "black" }}
        >
          Profile <i class="fa-solid fa-user"></i>
        </a>
        <hr></hr>
      </div>
      <div className="mt-5">
        <a
          href="/student/exam"
          style={{ textDecoration: "none", color: "black" }}
        >
          Exam
        </a>
        <hr></hr>
      </div>
      <div className="mt-5">
        <a
          href="/student/result"
          style={{ textDecoration: "none", color: "black" }}
        >
          Result
        </a>
        <hr></hr>
      </div>
      <div className="mt-5">
        <a
          href="/student/request"
          style={{ textDecoration: "none", color: "black" }}
        >
          Request
        </a>
        <hr></hr>
      </div>
    </div>
  );
}

export default Verticalbar;
