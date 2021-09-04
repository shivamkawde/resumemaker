import {useState} from "react"
import { auth } from "../firebase";
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { Redirect } from "react-router-dom";
let Singnup=()=>{
   let [password,setPassword]=useState("");
   let[confirm,setconfirmPw]=useState("");
   let[email,setEmail]=useState("")
let user = useSelector(state=>state.userReducer)
    return(
        <>
        {user?<Redirect to="/"></Redirect>:""}
          <div className="row">
        <div className="col-4">
          <form className="m-4">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
               onChange={(e)=>{
                   setEmail(e.currentTarget.value)
               }}
            
                type="email"
                class="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input

      onChange={(e)=>{
     setPassword(e.currentTarget.value)
      }}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword2" class="form-label">
                Confirm Password
              </label>
              <input
               onChange={(e)=>{
                setconfirmPw(e.currentTarget.value)
            }}
         
                type="password"
                class="form-control"
                id="exampleInputPassword2"
              />
            </div>
            <button
              
              onClick={(e) => {
                e.preventDefault();
                if (password ==confirm ){
                  auth.createUserWithEmailAndPassword(email, password);
                } else {
                  alert("Please check password entered");
                }
              }}


              type="submit"
              class="btn btn-primary"
            >
              Sign Up!
            </button>
          </form>
        </div>
      </div>
    </>
    )
}
export default Singnup