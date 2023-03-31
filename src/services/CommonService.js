import axios from "axios";
import { AddUserInfo,AddProf,AddPass,UpdatePass } from "./CommonMetaData";


const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };

export async function AddUser(userId,firstName,email,token){
    const url=process.env.REACT_APP_API_URL+"/v1/user/Add";
    const response=await axios.post(url,AddUserInfo(userId,firstName,email),config,{
        headers:{
            Authorization: `Bearer ` + token
        }
    });
    if(response.status===200 || response.status===201)
        return response.data;
    throw response;
}
export async function GetUser(id,token){

    const url=process.env.REACT_APP_API_URL+"/v1/user/"+`${id}`;
    const response=await axios.get(url,config,{
        headers:{
            Authorization: `Bearer ` + token
        }
    });
    if(response.status===200 || response.status===201)
        return response.data;
    throw response;
}
export async function GetProfileData(id,profile,token){

    const url=process.env.REACT_APP_API_URL+"/v1/password/"+`${id}`+`/${profile}`;
    const response=await axios.get(url,config,{
        headers:{
            Authorization: `Bearer ` + token
        }
    });
    if(response.status===200 || response.status===201)
        return response.data;
    throw response;
}

export async function AddProfile(userId,profile,token){

    const url=process.env.REACT_APP_API_URL+"/v1/user/"+`${userId}`;
    const response=await axios.patch(url,AddProf(profile),config,{
        headers:{
            Authorization: `Bearer ` + token
        }
    });
    if(response.status===200 || response.status===201)
        return response.data;
    throw response;
}
export async function AddPassword(userId,profile,password,email,color,token){
    
    const url=process.env.REACT_APP_API_URL+"/v1/password/Add"+`/${userId}`+`/${profile}`;
    const response=await axios.post(url,AddPass(password,email,color),config,{
        headers:{
            Authorization: `Bearer ` + token
        }
    });
    if(response.status===200 || response.status===201)
        return response.data;
    throw response;
}
export async function UpdatePassword(userId,profile,profileUpdate,password,email,color,token){

    const url=process.env.REACT_APP_API_URL+"/v1/password"+`/${userId}`+`/${profile}`;
    const response=await axios.patch(url,UpdatePass(profileUpdate,password,email,color),config,{
        headers:{
            Authorization: `Bearer ` + token
        }
    });
    if(response.status===200 || response.status===201)
        return response.data;
    throw response;
}

