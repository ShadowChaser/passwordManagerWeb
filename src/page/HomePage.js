import React,{useContext} from 'react'
import PasswordCreate from '../components/passwordCreate';
import Navbar from '../components/Navbar';
import { UserContext } from "../context/UserContext"
import {Navigate } from "react-router-dom";


export default function HomePage() {
  const context = useContext(UserContext);
  if(!context.user?.uid){
    return <Navigate  to="/"/>
  }
  return (
    <div>
        <Navbar/>
        <PasswordCreate/>
    </div>
  )
}
