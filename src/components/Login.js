import {useState} from "react"
import { useHistory } from "react-router-dom"
import {useSelector} from  "react-redux"
import { Redirect } from "react-router-dom"
import {auth} from "../firebase"
let Login=()=>{

   let history=useHistory()
  let user= useSelector(state => state.userReducer)
  console.log(user)
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
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
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
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
                onChange={(e) => {
                    setPassword(e.currentTarget.value);
                  }}
                  value={password}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
          
            <button
             onClick={(e) => {
                e.preventDefault();
                auth.signInWithEmailAndPassword(email, password);
              }}
              
              type="submit"
              class="btn btn-primary"
            >
             Login
            </button>
            <br/>
            <br/>
            <button
              onClick={()=>{
                  history.push("/Singnup")
              }}
              class="btn btn-primary"
            >
             Create Account
            </button>
          </form>
        </div>
        <h3>For Testing Username- test123@test.com</h3>
      <h3>Password-123456</h3>
      </div>
        
        
        </>
    )
}
export default Login