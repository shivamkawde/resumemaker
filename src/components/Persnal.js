import React from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Navbar from './Navbar'
import Preview from './Preview'
import "./css/Persnal.css"
import {setDetails} from "../redux/action"
function Persnal() {

  let { fname, lname, city, state, email, phone } = useSelector(state => state.details)
    let dispatch=useDispatch()
    let history=useHistory();
    return (
       <>
         <Navbar/>
         <div className="personal">
        <div className="form-container p-4">
          <h2>Personal Details</h2>
          <div>
            <div class="row">
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  aria-label="First name"
                  value={fname}
                  onChange={(e)=>{
                    dispatch(setDetails({fname:e.currentTarget.value}))
                  }}
                  
                />
              </div>
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                   value={lname}
                   onChange={(e)=>{
                    dispatch(setDetails({lname:e.currentTarget.value}))
                  }}
                 
                />
              </div>
            </div>

            <div class="row">
              <div class="col-4">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e)=>{
                    dispatch(setDetails({email:e.currentTarget.value}))
                  }}
                 
                />
              </div>
              <div class="col-4">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Phone Number"
                 value={phone}
                 onChange={(e)=>{
                  dispatch(setDetails({phone:e.currentTarget.value}))
                }}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="City"
                  value={city}
                  onChange={(e)=>{
                    dispatch(setDetails({city:e.currentTarget.value}))
                  }}
                />
              </div>
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="State"
                  value={state}
                  onChange={(e)=>{
                    dispatch(setDetails({state:e.currentTarget.value}))
                  }}
                  
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          <button
           onClick={()=>{
             history.push("/Qualification")
           }}
            className="btn btn-primary"
          >
            Next
          </button>
        </div>
        <Preview />
      </div>


       </>
    )
}

export default Persnal
