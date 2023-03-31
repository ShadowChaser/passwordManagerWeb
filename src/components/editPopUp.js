import React,{useState,useContext} from 'react';
import './generatePass.css';
import {UpdatePassword, GetProfileData} from '../services/CommonService';
import { UserContext } from "../context/UserContext";
import { SketchPicker } from "react-color";
import {FaWindowClose} from "react-icons/fa";
import { useEffect } from 'react';


export default function EditPupUp({profile,setCurrProfile,setIsOpen}) {
    const context = useContext(UserContext);
    const [prof,setProf]=useState(profile);
    const [pass,setPass]=useState()
    const [email,setEmail]=useState();
    const [sketchPickerColor,setSketchPickerColor]=useState();
    const [openPicker,setOpenPicker]=useState(false);

    useEffect(()=>{
      GetProfileData(context.user?.uid,prof,context.user.token).then((response)=>{
        setSketchPickerColor(response[0].color);
        setEmail(response[0].email);
        setPass(response[0].password);
        setSketchPickerColor(response[0].color);
      }).catch((err)=>console.log(err))

    },[])
    
    let getProfile=()=>{
      GetProfileData(context.user?.uid,prof,context.user.token).then((response)=>{
        setSketchPickerColor(response[0].color);
        setEmail(response[0].email);
        setPass(response[0].password);
        setSketchPickerColor(response[0].color);
      }).catch((err)=>console.log(err))
    }
    
    const saveProfile=()=>{
      UpdatePassword(context.user?.uid,profile,prof,pass,email,sketchPickerColor,context.user.token).then((response)=>{
        setIsOpen(false);
        setEmail(response.p1.email);
        setPass(response.p1.password);
        setProf(response.p1.profileName)
        setSketchPickerColor(response.p1.color);
        setCurrProfile(prof);
        getProfile();
        console.log("Profile Updated");
      }).catch((err)=>console.log(err))
    }
      return (
        <div className="wrapper">
          <div className="container wrapper-box">

            <div class="d-flex bd-highlight mb-3">
          <div class="p-2 bd-highlight">
              <h1>Edit Profile</h1>
          </div>
            <div class="ms-auto p-2 bd-highlight">
              <FaWindowClose size={30} onClick={()=>setIsOpen(false)}/>
            </div>
        </div>
            <div className="password-box">
            <div>
                <h2>Profile</h2>
              </div>
              <input
                type="text"
                value={prof}
                placeholder="Profile Name"
                autoComplete="off"
                onChange={(e) => setProf(e.target.value)}
              />
            </div>
            <br />
            <div className="password-box">
            <div>
                <h2>Email</h2>
              </div>
              <input
                type="text"
                value={email}
                placeholder="Email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="password-box">
            <div>
                <h2>Password</h2>
              </div>
              <input
                type="text"
                value={pass}
                placeholder="Password"
                autoComplete="off"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
      <div className="sketchpicker" style={{display:"flex",flexDirection:'row',marginTop:"10px",marginRight:"5px"}} >
        <h2>Color</h2>
        
        <div
          style={{
            backgroundColor: sketchPickerColor,
            width: 25,
            height: 25,
            border: "2px solid white",
            marginLeft:"10px"
          }}
             onClick={(e)=>setOpenPicker(!openPicker)}></div>
        {/* Sketch Picker from react-color and handling color on onChange event */}
        {openPicker? <SketchPicker
          onChange={(color) => {
            setSketchPickerColor(color.hex);
          }}
          color={sketchPickerColor}
        />:null}
       
      </div>
            <div>
              <button className="generate-button" onClick={saveProfile}>
                Save
              </button>
            </div>
          </div>
        </div>
      );
}
