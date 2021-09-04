import React from "react";
import "./css/Preview.css";
import { useSelector } from "react-redux";
function Preview() {
  let {
    fname,
    lname,
    city,
    state,
    phone,
    email,
    year,
    degree,
    college,
    cgpa,
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    hobby1,
    hobby2,
    hobby3,
    hobby4,
    hobby5,
    achivement1,
    achivement2,
  } = useSelector((state) => state.details);
  let code = useSelector((state) => state.tamplate);

  return (
    <div className="preview-container">
      <h4>First Name</h4> <p className={`template-${code}`}>{fname}</p>
      <h4>Last Name</h4>
      <p className={`template-${code}`}>{lname}</p>
      <h4>City</h4>
      <p className={`template-${code}`}>{city}</p>
      <h4>State</h4>
      <p className={`template-${code}`}>{state}</p>
      <h4>Email</h4>
      <p className={`template-${code}`}>{email}</p>
      <h4>Contact No</h4>
      <p className={`template-${code}`}>{phone}</p>
      <h4>College</h4>
      <p className={`template-${code}`}>{college}</p>
      <h4>Degree</h4>
      <p className={`template-${code}`}>{degree}</p>
      <h4>Year</h4>
      <p className={`template-${code}`}>{year}</p>
      <h4>CGPA</h4>
      <p className={`template-${code}`}>{cgpa}</p>
      {hobby1 !== "" ? (
        <>
          {" "}
          <h4>Hobby1</h4>
          <p className={`template-${code}`}>{hobby1}</p>
        </>
      ) : (
        ""
      )}
      {hobby2 !== "" ? (
        <>
          {" "}
          <h4>Hobby2</h4>
          <p className={`template-${code}`}>{hobby2}</p>
        </>
      ) : (
        ""
      )}
      {hobby3 !== "" ? (
        <>
          {" "}
          <h4>Hobby3</h4>
          <p className={`template-${code}`}>{hobby3}</p>
        </>
      ) : (
        ""
      )}
      {hobby4 !== "" ? (
        <>
          {" "}
          <h4>Hobby4</h4>
          <p className={`template-${code}`}>{hobby4}</p>
        </>
      ) : (
        ""
      )}
      {hobby5 !== "" ? (
        <>
          {" "}
          <h4>Hobby5</h4>
          <p className={`template-${code}`}>{hobby5}</p>
        </>
      ) : (
        ""
      )}
      {achivement1 !== "" ? (
        <>
          {" "}
          <h4>Achivement1</h4>
          <p className={`template-${code}`}>{achivement1}</p>
        </>
      ) : (
        ""
      )}
      {achivement2 !== "" ? (
        <>
          {" "}
          <h4>Achivement2</h4>
          <p className={`template-${code}`}>{achivement2}</p>
        </>
      ) : (
        ""
      )}
      {skill1 !== "" ? (
        <>
          {" "}
          <h4>Skill1</h4>
          <p className={`template-${code}`}>{skill1}</p>
        </>
      ) : (
        ""
      )}
      {skill2 !== "" ? (
        <>
          {" "}
          <h4>Skill2</h4>
          <p className={`template-${code}`}>{skill2}</p>
        </>
      ) : (
        ""
      )}
      {skill3 !== "" ? (
        <>
          {" "}
          <h4>Skill3</h4>
          <p className={`template-${code}`}>{skill3}</p>
        </>
      ) : (
        ""
      )}
      {skill4 !== "" ? (
        <>
          {" "}
          <h4>Skill4</h4>
          <p className={`template-${code}`}>{skill4}</p>
        </>
      ) : (
        ""
      )}
      {skill5 !== "" ? (
        <>
          {" "}
          <h4>Skill5</h4>
          <p className={`template-${code}`}>{skill5}</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Preview;
