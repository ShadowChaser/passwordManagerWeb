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
  useEffect(()=>{
    GetProfileData(context.user?.uid,profile,context.user.token).then((response)=>{
      setData(response[0]);
    }
    ).catch((err)=>console.log(err))
  },[])
  useEffect(()=>{
    GetProfileData(context.user?.uid,profile,context.user.token).then((response)=>{
      setData(response[0]);
    }
    ).catch((err)=>console.log(err))
  },[isOpen])
  return (
    <div>
      <div>
    <Card style={{ width: '20rem' ,height:'19rem',marginTop:"3rem",backgroundColor:data?data.color:"#FFFFFF"}}>
      <Card.Body>
        
        <div class="d-flex bd-highlight mb-3">
          <div class="p-2 bd-highlight">
              <h4>{profile}</h4>
          </div>
            <div class="ms-auto p-2 bd-highlight">
              <FaEdit size={18} onClick={()=>setIsOpenEdit(true)}/>
            </div>
        </div>
        <Card.Text>
          Email Id : {data.email}
        </Card.Text>
        <Button variant="primary" style={{ marginTop:"5rem"}} onClick={()=>setIsOpen(true)}>Add Password</Button>
      </Card.Body>
    </Card>
    </div>
    {isOpen && !isOpenEdit?<div>
      <Modal isOpen={isOpen} onRequestClose={()=>setIsOpen(false)} style={{
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
        
        <GeneratePass profile={profile} setIsOpen={setIsOpen}/>
        
      </Modal>
    </div>:<></>}
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
        
        <EditPupUp profile={profile} setIsOpen={setIsOpenEdit}/>
        
      </Modal>:<></>
    }
    
    </div>
  )
}
