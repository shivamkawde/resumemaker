import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { firestore } from "../firebase";
import Myresume from "./Myresume";
import Navbar from "./Navbar";
function Myprofile() {
  let user = useSelector((state) => state.userReducer);
  let [details, setDetails] = useState();
  let [code, setCode] = useState([]);
  useEffect(() => {
    let f = async () => {
      await firestore.collection("resume").onSnapshot((querySnapshot) => {
        let tempArr = [];
        let colorTamplate = "";

        querySnapshot.forEach((doc) => {
          if (user && user.uid === doc.data().uid) {
            tempArr.push({
              data: doc.data().details,
            });
            colorTamplate = doc.data().code;
          }
        });

        setDetails(tempArr);
        setCode(colorTamplate);
      });
    };

    f();
  }, []);

  return (
    <div>
      <Navbar />
      <h5 style={{ textAlign: "center", color: "green" }}>
        Welcome {user.email}
      </h5>
      {details
        ? details.map((e) => {
            return (
              <>
                <Myresume p={e} code={code}></Myresume>
              </>
            );
          })
        : ""}
    </div>
  );
}

export default Myprofile;
