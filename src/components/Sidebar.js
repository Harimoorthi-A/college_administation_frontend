import React from "react";

function Sidebar() {
  return (
    <div style={{ backgroundColor: "#5FBDFF", height: "81vh" }} className="ps-1">
      <div className="pt-5">
        <a href="/notification" style={{ textDecoration: "none", color: "black" }}>
          Notification
        </a>
        <hr></hr>
      </div>
      <div className="mt-5">
        <a href="/enquiry" style={{ textDecoration: "none", color: "black" }}>
          Admission Enquiry
        </a>
        <hr></hr>
      </div>
      <div className="mt-5">
        <a href="/review" style={{ textDecoration: "none", color: "black" }}>
          Reviews
        </a>
        <hr></hr>
      </div>
      <div className="mt-5">
        <a href="/post" style={{ textDecoration: "none", color: "black" }}>
          New Posts
        </a>
        <hr></hr>
      </div>
    </div>
  );
}

export default Sidebar;
