import React,{ useContext,useState } from 'react';
import {signInWithPopup} from 'firebase/auth';
import {auth,provider} from '../Firebase';
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../context/UserContext"
import {Navigate } from "react-router-dom";
import {GoogleButton} from 'react-google-button';
import "./passwordCreation.css";
import {AddUser} from "../services/CommonService"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Login() {
    const context = useContext(UserContext);
    const signInWithGoogle= () =>{
      signInWithPopup(auth,provider).then((result)=>{
        context.setUser({email: result.user.email, uid: result.user.uid,firstName:result.user.displayName,token:result._tokenResponse.idToken});
        console.log(`Bearer ` + result._tokenResponse.idToken)
        newUserAdd(result.user.uid,result.user.displayName,result.user.email,result._tokenResponse.idToken);
      }).catch((error)=>{
          console.log(error);
      });
  }

  const newUserAdd=(u_id,name,email)=>{
    AddUser(u_id,name,email).
    then((response)=>{
      console.log("User Signed In")
    })
    .catch((err)=>{
      console.log("User Logged In")
    })
  }

  if(context.user?.uid){
    return <Navigate  to="/home"/>
  }
    return (
      <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between",flexDirection:"column",height: "80%"}}>
        <div>
        <section className='hero-section'>
            <p>Welcome To</p>
            <h1>Password Manager</h1>
        </section>
        </div>
  
        <div style={Style.google}>
        <GoogleButton onClick={signInWithGoogle}/>
        </div>
      </div>
    );
}


const Style=({
  google:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
 },
 signIn:{
    marginBottom:"60",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
 },
 container:{
    marginBottom:"60",
    display:"flex",
    justifyContent: "space-around",
    flexDirection: 'column'
 }
})