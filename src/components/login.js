import React,{ useContext,useState } from 'react';
import {signInWithPopup} from 'firebase/auth';
import {auth,provider} from '../Firebase';
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../context/UserContext"
import {Navigate } from "react-router-dom";
import {GoogleButton} from 'react-google-button';



export default function Login() {
    const context = useContext(UserContext);
    const [userName,setUserName]=useState('');
    const [email,setEmail]=useState('');
    const [uid,setUid]=useState('');
    
  
    const signInWithGoogle= () =>{
      signInWithPopup(auth,provider).then((result)=>{
        setUserName(result.user.displayName);
        setEmail(result.user.email)
        setUid(result.user.uid)
        context.setUser({email: result.user.email, uid: result.user.uid})
      }).catch((error)=>{
          console.log(error)
      });
  }

  if(context.user?.uid){
    return <Navigate  to="/home"/>
  }
    return (
      <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between",flexDirection:"column",height: "80%"}}>
        <div style={Style.signIn}><h1>Please Sign In Below</h1></div>
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