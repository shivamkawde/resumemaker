import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setDetails } from "../redux/action";
import { saveResume } from "../redux/action";
import Preview from "./Preview";
import "./css/Persnal.css";
import Navbar from "./Navbar";
import { firestore } from "../firebase";

function Skills() {
  let { skill1, skill2, skill3, skill4, skill5, isPublic } = useSelector(
    (state) => state.details
  );

  let details = useSelector((state) => state.details);
  let code = useSelector((state) => state.tamplate);
  let user = useSelector((state) => state.userReducer);

  let dispatch = useDispatch();
  let history = useHistory();
  return (
    <>
      <Navbar />
      <div className="qual">
        <div className="form-container p-4">
          <h2>Skills</h2>

          <div>
            <div class="row">
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Skill1"
                  value={skill1}
                  onChange={(e) => {
                    dispatch(setDetails({ skill1: e.currentTarget.value }));
                  }}
                />
              </div>
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Skill2"
                  value={skill2}
                  onChange={(e) => {
                    dispatch(setDetails({ skill2: e.currentTarget.value }));
                  }}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Skill3"
                  value={skill3}
                  onChange={(e) => {
                    dispatch(setDetails({ skill3: e.currentTarget.value }));
                  }}
                />
              </div>
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Skill4"
                  value={skill4}
                  onChange={(e) => {
                    dispatch(setDetails({ skill4: e.currentTarget.value }));
                  }}
                />
              </div>
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Skill5"
                  value={skill5}
                  onChange={(e) => {
                    dispatch(setDetails({ skill5: e.currentTarget.value }));
                  }}
                />
              </div>
            </div>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              checked={isPublic}
              onChange={(e) => {
                dispatch(setDetails({ isPublic: e.currentTarget.checked }));
              }}
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Make public
            </label>
          </div>
          <br />
          <br />
          <div class="col-4">
            <button
              onClick={() => {
                history.push("/Hobbies");
              }}
              className="btn btn-primary"
            >
              Back
            </button>
            <br />
            <br />
          </div>
          <div class="col-4">
            <button
              onClick={() => {
                history.push("/Viewresume");
              }}
              className="btn btn-primary"
            >
              View Resume
            </button>
          </div>
          <br />
          <div class="col-4">
            <button
              onClick={() => {
                history.push({
                  pathname: "/Viewresume",
                  flag: true,
                  state: { props: "" },
                });
              }}
              class="btn btn-primary"
            >
              Download Resume
            </button>
          </div>
          <br />
          <button
            onClick={() => {
              firestore.collection("resume").add({
                details: details,
                code: code,
                uid: user.uid,
              });
            }}
            class="btn btn-success"
          >
            Save to Database
          </button>
        </div>
        <Preview />
      </div>
    </>
  );
}

export default Skills;
