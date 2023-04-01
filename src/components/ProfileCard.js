import React,{useEffect, useState,useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-modal';
import GeneratePass from './GeneratePass';
import {FaEdit} from "react-icons/fa";
import EditPupUp from './editPopUp';
import { GetProfileData } from '../services/CommonService';
import { UserContext } from "../context/UserContext"

export default function ProfileCard({profile}) {
  const context = useContext(UserContext);
  const [isOpen,setIsOpen]=useState(false);
  const [isOpenEdit,setIsOpenEdit]=useState(false);
  const [data,setData]=useState();
  const [currProfile,setCurrProfile]=useState(profile);
  useEffect(()=>{
    GetProfileData(context.user?.uid,currProfile,context.user.token).then((response)=>{
      setData(response[0]);
    }
    ).catch((err)=>console.log(err))
  },[])
  // useEffect(()=>{
  //   GetProfileData(context.user?.uid,currProfile,context.user.token).then((response)=>{
  //     setData(response[0]);
  //   }
  //   ).catch((err)=>console.log(err))
  // },[isOpen])
  // useEffect(()=>{
  //   GetProfileData(context.user?.uid,currProfile,context.user.token).then((response)=>{
  //     setData(response[0]);
  //   }
  //   ).catch((err)=>console.log(err))
  // },[isOpenEdit])
  // useEffect(()=>{
  //   GetProfileData(context.user?.uid,currProfile,context.user.token).then((response)=>{
  //     setData(response[0]);
  //   }
  //   ).catch((err)=>console.log(err))
  // },[currProfile])
  return (
    <div>
      <div>
    <Card style={{ width: '20rem' ,height:'19rem',marginTop:"3rem",backgroundColor:data?data.color:"#FFFFFF"}}>
      <Card.Body>
        
        <div class="d-flex bd-highlight mb-3">
          <div class="p-2 bd-highlight">
              <h4>{currProfile}</h4>
          </div>
            <div class="ms-auto p-2 bd-highlight">
              <FaEdit size={18} onClick={(e)=>{
                e.preventDefault();
                setIsOpenEdit(true)}}/>
            </div>
        </div>
        <Card.Text>
          Email Id : {data?data.email:""}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    
    {
      isOpenEdit && !isOpen ?<Modal isOpen={isOpenEdit} onRequestClose={()=>setIsOpenEdit(false)} style={{
        content:{
          width:"500px",
          height:"560px",
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        }
      }}>
        
        <EditPupUp profile={profile} setCurrProfile={setCurrProfile} setIsOpen={setIsOpenEdit}/>
        
      </Modal>:<></>
    }
    
    </div>
  )
}
