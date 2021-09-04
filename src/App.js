import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Singnup from "./components/Singnup";
import Home from "./components/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/action";
import { auth, firestore } from "./firebase";
import Persnal from "./components/Persnal";
import QuaLification from "./components/Qualification";
import Skills from "./components/Skills";
import Viewresume from "./components/Viewresume";
import Hobbies from "./components/Hobbies";
import Achivements from "./components/Achivements";
import Myprofile from "./components/Myprofile";
import Databsedownload from "./components/Databasedownload";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async (user) => {
      dispatch(setUser(user));

      if (user) {
        let { uid, email } = user;

        let docRef = firestore.collection("users").doc(uid);
        let doc = await docRef.get();
        if (!doc.exists) {
          docRef.set({ email });
        }
      }
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/Login">
          <Login></Login>
        </Route>
        <Route path="/Singnup">
          <Singnup></Singnup>
        </Route>
        <Route path="/Navbar">
          <Navbar></Navbar>
        </Route>
        <Route path="/Persnal">
          <Persnal />
        </Route>
        <Route path="/Myprofile">
          <Myprofile />
        </Route>
        <Route path="/Skills">
          <Skills />
        </Route>
        <Route path="/Databasedownload">
          <Databsedownload />
        </Route>

        <Route path="/Viewresume">
          <Viewresume />
        </Route>
        <Route path="/Qualification">
          <QuaLification />
        </Route>
        <Route path="/Hobbies">
          <Hobbies />
        </Route>
        <Route path="/Achivements">
          <Achivements />
        </Route>

        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
