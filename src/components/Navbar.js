import { Link } from "react-router-dom";

let Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
      
      <p class="navbar-brand" >
              ResumeMaker  
        </p>
        <Link class="navbar-brand" to="/Home">
              Home   
        </Link>
        <Link class="navbar-brand" to="/Myprofile">My Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
