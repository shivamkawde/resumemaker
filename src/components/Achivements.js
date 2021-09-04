import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setDetails } from "../redux/action";
import { saveResume } from "../redux/action";
import Preview from "./Preview";
import "./css/Persnal.css";
import Navbar from './Navbar';
import { firestore } from '../firebase';

function Achivements() {
    let { achivement1,achivement2  } = useSelector(
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
              <h2>Achivements</h2>
              <div>
                <div class="row">
                  <div class="col-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Achivement1"
                      value={achivement1}
                      onChange={(e) => {
                        dispatch(setDetails({ achivement1: e.currentTarget.value }));
                      }}
                    />
                  </div>
                  <div class="col-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Achivement2"
                      value={achivement2}
                      onChange={(e) => {
                        dispatch(setDetails({ achivement2: e.currentTarget.value }));
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
                  history.push("/Hobbies");
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
                  history.push("/Skills");
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

export default Achivements
