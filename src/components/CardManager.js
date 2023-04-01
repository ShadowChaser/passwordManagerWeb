import React,{useState,useEffect,useContext} from 'react';
import Button from 'react-bootstrap/Button';
import ProfileCard from './ProfileCard';
import Modal from 'react-modal';
import {FaWindowClose} from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import { UserContext } from "../context/UserContext"
import { AddProfile,GetUser } from '../services/CommonService';
import GeneratePass from './GeneratePass';


export default function CardManager() {
  const context = useContext(UserContext);
  const [isOpen,setIsOpen]=useState(false);
  const [profiles,setProfiles]=useState([]);

  useEffect(() => {
    GetUser(context.user.uid,context.user.token).then((response)=>{
      setProfiles(response.profiles);
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  useEffect(() => {
    GetUser(context.user.uid,context.user.token).then((response)=>{
      setProfiles(response.profiles);
    }).catch((err)=>{
      console.log(err)
    })
  }, [isOpen])
  
  
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
        <GeneratePass setIsOpen={setIsOpen}/>
        
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