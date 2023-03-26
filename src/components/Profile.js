import React from 'react';
import profilepic from '../profilepic.jpg'

export default function Profile() {
  return (
    <div class="d-flex flex-row-reverse bd-highlight">
        <div class="p-2 bd-highlight" style={Styles.profileImgContainer}>
            <img src={profilepic} alt="Profile" style={Styles.image}/>
        </div>
    </div>
  )
}


const Styles=({
    container:{
        display:"flex"
    },
    image:{
        height: 35,
        width: 35,
        borderRadius: "50%",
        marginTop:"-5px",
        marginLeft:"-5px"
    },
    profileImgContainer: {
        height: 45,
        width: 45,
        borderRadius: "50%",
        borderStyle: "solid",
        borderColor: 'blue', 
        borderWidth:2,
        marginRight:"1%",
        marginTop:"5px"
      },
})