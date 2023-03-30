import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-modal';
import {FaWindowClose} from "react-icons/fa";
import GeneratePass from './GeneratePass'
import './passwordCreation.css';

export default function ProfileCard({profile}) {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <div>
      <div>
    <Card style={{ width: '18rem' ,height:'15rem',marginTop:"3rem"}}>
      <Card.Body>
        <Card.Title style={{display:"flex",alignItems:"center",marginTop:"5%"}}>{profile}</Card.Title>
        {/* <Card.Text>
          Email Id : {}
        </Card.Text> */}
        <Button variant="primary" style={{ marginTop:"5rem"}} onClick={()=>setIsOpen(true)}>Add Password</Button>
      </Card.Body>
    </Card>
    </div>
    {isOpen?<div>
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
        
        <GeneratePass/>
        
      </Modal>
    </div>:<></>}
    
    </div>
  )
}
