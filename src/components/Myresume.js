import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./css/Viewresume.css";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useLocation, useHistory } from "react-router-dom";
import Navbar from "./Navbar";

function Myresume(props) {
  let history = useHistory();
  let location = useLocation();
  console.log(props.code);

  return (
    <>
      <div className="">
        <div className="container resume">
          <div className={`tamplate${props.code}`}>
            <h2>
              {props.p.data.fname} {props.p.data.lname}
            </h2>
          </div>
          <div className="">
            <h5 className={`tamplate${props.code}`}>Mobile No</h5>{" "}
            {props.p.data.phone}
            <h5 className={`tamplate${props.code}`}>Email</h5>{" "}
            {props.p.data.email}
          </div>
          <div>
            <h4 className={`tamplate${props.code}`}>Education</h4>
            <b>Degree-</b>
            {props.p.data.degree}
            <br />
            <b>College-</b>
            {props.p.datacollege}
            <br />
            <b>CGPA%-</b>
            {props.p.datacgpa}
            <br />
            <b>Year-</b>
            {props.p.data.year}
          </div>

          <div>
            <h4 className={`tamplate${props.code}`}>Skills</h4>
            <b className="skills">{props.p.data.skill1}</b>
            <br />
            <br />
            <b className="skills">{props.p.data.skill2}</b>
            <br />
            <br />
            <b className="skills">{props.p.data.skill3}</b>
            <br />
            <br />
            <b className="skills">{props.p.data.skill4}</b>
            <br />
            <br />
            <b className="skills">{props.p.data.skill5}</b>
          </div>
          <div className="">
            <h4 className={`tamplate${props.code}`}>Hobbies</h4>
            <b className="">{props.p.data.hobby1}</b>
            <br />
            <br />
            <b className="">{props.p.data.hobby2}</b>
            <br />
            <br />
            <b className="">{props.p.data.hobby3}</b>
            <br />
            <br />
            <b className="">{props.p.data.hobby4}</b>
            <br />
            <br />
            <b className="">{props.p.data.hobby5}</b>
          </div>

          <div className="">
            <h4 className={`tamplate${props.code}`}>Achivements</h4>

            <b className="">{props.p.data.achivement1}</b>
            <br />
            <br />
            <b className="">{props.p.data.achivement2}</b>
          </div>

          <button
            class="btn btn-primary mb-2"
            onClick={() => {
              history.push({
                pathname: "/Databasedownload",
                state: {
                  props: props.p.data,
                  flag: true,
                  code: props.code,
                },
              });
            }}
          >
            Download
          </button>
        </div>

        <br />
      </div>
    </>
  );
}

export default Myresume;
