import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setDetails } from "../redux/action";
import { saveResume } from "../redux/action";
import Preview from "./Preview";
import "./css/Persnal.css";
import Navbar from './Navbar';
import { firestore } from '../firebase';

function Hobbies() {
    let { hobby1,hobby2,hobby3,hobby4,hobby5  } = useSelector(
        (state) => state.details
      );

      let details = useSelector((state) => state.details);
      let code = useSelector((state) => state.tamplate);
      let saveState = useSelector((state) => state.saveState);
      let dispatch = useDispatch();
      let history = useHistory();
      return (
        <>
        <Navbar/>
          <div className="qual">
            <div className="form-container p-4">
              <h2>Hobbies</h2>
    
              <div>
                <div class="row">
                  <div class="col-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="hobby1"
                      value={hobby1}
                      onChange={(e) => {
                        dispatch(setDetails({ hobby1: e.currentTarget.value }));
                      }}
                    />
                  </div>
                  <div class="col-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="hobby2"
                      value={hobby2}
                      onChange={(e) => {
                        dispatch(setDetails({ hobby2: e.currentTarget.value }));
                      }}
                    />
                  </div>
                </div>
    
                <div class="row">
                  <div class="col-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="hobby3"
                      value={hobby3}
                      onChange={(e) => {
                        dispatch(setDetails({ hobby3: e.currentTarget.value }));
                      }}
                    />
                  </div>
                  <div class="col-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="hobby4"
                      value={hobby4}
                      onChange={(e) => {
                        dispatch(setDetails({ hobby4: e.currentTarget.value }));
                      }}
                    />
                  </div>
                  <div class="col-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="hobby5"
                      value={hobby5}
                      onChange={(e) => {
                        dispatch(setDetails({ hobby5: e.currentTarget.value }));
                      }}
                    />
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div class="col-4">
              <button
                onClick={() => {
                  history.push("/Qualification");
                }}
                className="btn btn-primary"
              >
                Back
              </button>
              <br/>
              <br/>
              </div>

              <div class="col-4">
              <button
                onClick={() => {
                  history.push("/Achivements");
                }}
                className="btn btn-primary"
              >
                Next
              </button>
              <br/>
              <br/>
              </div>
            
            </div>
            <Preview />
          </div>
          </>
)

}

export default Hobbies
