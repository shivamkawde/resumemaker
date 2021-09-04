import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./css/Viewresume.css";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useLocation, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
//import { ComponentToPrint } from './ComponentToPrint';
function Databsedownloade(props) {
  let history = useHistory();
  let location = useLocation();
  console.log(props.code);
  useEffect(() => {
    handlePrint();
  }, []);
  let details = useSelector((state) => state.details);
  let code = useSelector((state) => state.tamplate);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  console.log(code);
  return (
    <>
      <div ref={componentRef} className="">
        <div className="container">
          <div className={`tamplate${location.state.code}`}>
            <h2>
              {location.state.props.fname} {location.state.props.lname}
            </h2>
          </div>
          <div className="">
            <h5 className={`tamplate${location.state.code}`}>Mobile No</h5>{" "}
            {location.state.props.phone}
            <h5 className={`tamplate${props.code}`}>Email</h5> {props.email}
          </div>
          <div>
            <h4 className={`tamplate${location.state.code}`}>Education</h4>
            <b>Degree-</b>
            {location.state.props.degree}
            <br />
            <b>College-</b>
            {location.state.props.college}
            <br />
            <b>CGPA%-</b>
            {location.state.props.cgpa}
            <br />
            <b>Year-</b>
            {location.state.props.year}
          </div>

          <div>
            <h4 className={`tamplate${location.state.code}`}>Skills</h4>
            <b className="skills">{location.state.props.skill1}</b>
            <br />
            <br />
            <b className="skills">{location.state.props.skill2}</b>
            <br />
            <br />
            <b className="skills">{location.state.props.skill3}</b>
            <br />
            <br />
            <b className="skills">{location.state.props.skill4}</b>
            <br />
            <br />
            <b className="skills">{location.state.props.skill5}</b>
          </div>
        </div>

        <div className="hobbies">
          <h4 className={`tamplate${location.state.code}`}>Hobbies</h4>
          <b className="">{location.state.props.hobby1}</b>
          <br />
          <br />
          <b className="">{location.state.props.hobby2}</b>
          <br />
          <br />
          <b className="">{location.state.props.hobby3}</b>
          <br />
          <br />
          <b className="">{location.state.props.hobby4}</b>
          <br />
          <br />
          <b className="">{location.state.props.hobby5}</b>
        </div>

        <div
          className="achivements
            "
        >
          <h4 className={`tamplate${location.state.code}`}>Achivements</h4>
          <b className="">{location.state.props.achivement1}</b>
          <br />
          <br />
          <b className="">{location.state.props.achivement2}</b>
        </div>
      </div>
    </>
  );
}

export default Databsedownloade;
