import React from "react";
import IntroBar from "../components/IntroBar";
import ComputerImage from "../images/comp_img.jpeg";

const Courses = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You have applied for this course");
  }

  return (
    <div>
      <IntroBar pageName="Courses" />
      <h3 style={{ textAlign: "center" }}>Courses that we offer</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "18rem" }}>
          <img
            src={ComputerImage}
            width="200"
            height="200"
            alt="..."
            style={{
              marginLeft: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          />
          <div>
            <h4>Department of Computer Engineering</h4>
            <p>
              To provide quality undergraduate and graduate education in both
              the theoretical and applied foundations of computer science and
              train students to effectively apply this education to solve
              real-world problems thus amplifying their potential for lifelong
              high-quality careers.
            </p>
            <form onSubmit={handleSubmit} style={{ marginLeft: "80px" , marginBottom:"40px"}}>
              <button type="submit">Apply for Course</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
