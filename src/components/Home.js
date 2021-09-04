import { auth } from "../firebase";
import {useDispatch, useSelector} from "react-redux"
import { Redirect } from "react-router-dom";
import "./css/Home.css"
import Navbar from "./Navbar"
import {useHistory} from "react-router-dom"
import {setTamplate} from "../redux/action"
let Home=()=>{
    let history=useHistory()
    let user=useSelector(state=>state.userReducer)
    console.log(user)
    let dispatch=useDispatch();
    return(
        <>

        {user?"":<Redirect to="/login"></Redirect>} 
        <Navbar/>
        <div className="template-container">
        <div onClick={(e)=>{
           dispatch(setTamplate("A"))
           history.push("/Persnal");
        }}
          className="template"
        >
          <img src="http://localhost:3000/skin1.svg" />
        </div>
        <div
          className="template"

          onClick={()=>{
              dispatch(setTamplate("b"))
              history.push("/Persnal")
          }}
        >
          <img src="http://localhost:3000/skin2.svg" />
        </div>
      </div>

        <button  onClick={()=>{
            auth.signOut();
        }}  class="btn btn-primary">logout</button>
        </>
    )
}
export default Home; 