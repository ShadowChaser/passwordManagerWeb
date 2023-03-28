import React,{ useContext,useState } from 'react';
import {signInWithPopup} from 'firebase/auth';
import {auth,provider} from '../Firebase';
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../context/UserContext"
import {Navigate } from "react-router-dom";


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
      <div>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      </div>
    );
}
