import React,{useState,useEffect,useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Card from './Card';
import Modal from 'react-modal';
import {FaWindowClose} from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import { UserContext } from "../context/UserContext"
import { AddProfile,getUser } from '../services/CommonService';

export default function CardManager() {
  const context = useContext(UserContext);
  const [isOpen,setIsOpen]=useState(false);
  const [profileName,setProfileName]=useState("");
  const [profiles,setProfiles]=useState([]);

  useEffect(() => {
    getUser(context.user.uid).then((response)=>{
      setProfiles(response.profiles);
    }).catch((err)=>{
      console.log(err)
    })
  }, [context.user.uid])
  
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    AddProfile(context.user.uid,profileName).then((response)=>{
      setProfiles(response.profiles);
      setIsOpen(false);
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div >
       <div className="d-grid gap-2">
            <Button variant="primary" size="lg" onClick={()=>setIsOpen(true)}>
                Create a Password Profile
            </Button>
    </div>
    
    <div>
      <Modal isOpen={isOpen} onRequestClose={()=>setIsOpen(false)} style={{
        content:{
          width:"500px",
          height:"500px",
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        }
      }}>
        <div class="d-flex bd-highlight mb-3">
          <div class="p-2 bd-highlight">
              <h1>Enter Profile Details To Save</h1>
          </div>
            <div class="ms-auto p-2 bd-highlight">
              <FaWindowClose size={30} onClick={()=>setIsOpen(false)}/>
            </div>
        </div>
        <div class="ms-auto p-2">
        <div style={{ display: 'block', 
                  width: 400, 
                  padding: 30 }}>
      
      <Form style={{display:"flex",justifyItems:"space-between" ,flexDirection:"column" ,gap: "15px"}} onSubmit={handleSubmit}>
          <Form.Group onChange={(e)=>{setProfileName(e.target.value)}}>
              <Form.Label>Enter your Profile name:</Form.Label>
              <Form.Control type="text" 
                            placeholder="Enter your Profile name"/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Click here to Create Profile
            </Button>
      </Form>
    </div>
  </div>
        
      </Modal>
    </div>
        <div className='d-flex flex-wrap justify-content-center w-1/2'>
          {profiles.length ? profiles.slice(1).map((profile,i)=>{
              return <div key={i}><Card profile={profile} /></div>
            }):<></>}
        </div>

    </div>
  )
}
