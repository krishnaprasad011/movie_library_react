import { React, useState,useEffect } from "react";
import fire  from "./fire";
import Login from "./Login";
import './App.css';
import Hero from "./Hero";

const App=()=> {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [asAcc, setAsAcc] = useState(false);


  const clearInputs = () => {
    setEmail("");
    setPass("");
  };
  const clearErrors = () => {
    setEmailErr("");
    setPassErr("");
  };

  const handerLogin = () =>{
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email,pass)
      .catch(err=>{
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailErr(err.message);
          break;
          case "auth/wrong-password":
            setPassErr(err.message);
            break;

        }
      });
  };
  const handerSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailErr(err.message);
            break;
          case "auth/weak-password":
            setPassErr(err.message);
            break;

        }
      });
  };

  const handelLogOut = () =>{
    fire.auth().signOut(); 
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged(user=>{
      if(user){
        clearInputs();
        setUser(user); 
      }else{
        setUser("");
      }
    });
  };
  
  useEffect(()=>{
    authListener();
  },[]);

  return (
    <div className="App">
      {
        user?(
          <Hero handelLogOut={handelLogOut} />

        ):(
            <Login
              email={email}
              setEmail={setEmail}
              pass={pass}
              setPass={setPass}
              asAcc={asAcc}
              setAsAcc={setAsAcc}
              handerLogin={handerLogin}
              handerSignUp={handerSignUp}
              emailErr={emailErr}
              passErr={passErr}
            />
        )
      }
      
    </div>
  );
}

export default App;
