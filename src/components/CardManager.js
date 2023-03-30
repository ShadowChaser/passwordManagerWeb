import React,{useState,useEffect,useContext} from 'react';
import Button from 'react-bootstrap/Button';
import ProfileCard from './Card';
import Modal from 'react-modal';
import {FaWindowClose} from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import { UserContext } from "../context/UserContext"
import { AddProfile,GetUser } from '../services/CommonService';


export default function CardManager() {
  const context = useContext(UserContext);
  const [isOpen,setIsOpen]=useState(false);
  const [profileName,setProfileName]=useState("");
  const [profiles,setProfiles]=useState([]);

  useEffect(() => {
    GetUser(context.user.uid,context.user.token).then((response)=>{
      setProfiles(response.profiles);
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    AddProfile(context.user.uid,profileName,context.user.token).then((response)=>{
      setProfiles(response.profiles);
      setIsOpen(false);
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
       <div className="d-flex justify-content-center p-4 gap-2 w-full">
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
        <div  style={Styles.container}>
          {profiles.length ? profiles.slice(1).map((profile,i)=>{
              return <div key={i} className="p-2"><ProfileCard profile={profile} /></div>
            }):<></>}
        </div>

    </div>
  )
}

const Styles=({
  container:{
    position: "absolute",
    flexDirection: "row",
    width:"60%",
    display:"flex",
    justifyContent:"center",
    flexWrap:"wrap",
    alignItems:"center",
    marginLeft:"20%"
  }
})