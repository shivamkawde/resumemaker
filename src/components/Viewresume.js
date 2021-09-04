import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./css/Viewresume.css";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useLocation } from "react-router-dom";
//import { ComponentToPrint } from './ComponentToPrint';

function Viewresume() {
  let location = useLocation();
  console.log(location.flag);
  useEffect(() => {
    location.flag ? handlePrint() : console.log("false");
  }, []);
  let details = useSelector((state) => state.details);
  let code = useSelector((state) => state.tamplate);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  console.log(code);
  return (
    <div ref={componentRef}>
      <div className="container">
        <div className={`tamplate${code}`}>
          <h2>
            {details.fname} {details.lname}
          </h2>
        </div>
        <div className="">
          <h5 className={`tamplate${code}`}>Mobile No</h5> {details.phone}
          <h5 className={`tamplate${code}`}>Email</h5> {details.email}
        </div>

        <div>
          <h4 className={`tamplate${code}`}>Education</h4>
          <b>Degree-</b>
          {details.degree}
          <br />
          <b>College-</b>
          {details.college}
          <br />
          <b>CGPA%-</b>
          {details.cgpa}
          <br />
          <b>Year-</b>
          {details.year}
        </div>

        <div>
          <h4 className={`tamplate${code}`}>Skills</h4>
          <b className="skills">{details.skill1}</b>
          <br />
          <br />
          <b className="skills">{details.skill2}</b>
          <br />
          <br />
          <b className="skills">{details.skill3}</b>
          <br />
          <br />
          <b className="skills">{details.skill4}</b>
          <br />
          <br />
          <b className="skills">{details.skill5}</b>
        </div>
      </div>

      <div className="hobbies">
        <h4 className={`tamplate${code}`}>Hobbies</h4>
        <b className="">{details.hobby1}</b>
        <br />
        <br />
        <b className="">{details.hobby2}</b>
        <br />
        <br />
        <b className="">{details.hobby3}</b>
        <br />
        <br />
        <b className="">{details.hobby4}</b>
        <br />
        <br />
        <b className="">{details.hobby5}</b>
      </div>

      <div className="achivements">
        <h4 className={`tamplate${code}`}>Achivements</h4>

        <b className="">{details.achivement1}</b>
        <br />
        <br />
        <b className="">{details.achivement2}</b>
      </div>
      {handlePrint}

      <br />
      {/* <button
                onClick={handlePrint}
        
           class="btn btn-primary"
           >Download</button> */}
    </div>
  );
}

export default Viewresume;
