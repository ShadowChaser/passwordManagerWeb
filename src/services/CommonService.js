import axios from "axios";
import { AddUserInfo,AddProf } from "./CommonMetaData";

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };

export async function AddUser(userId,firstName,email){
    const url=process.env.REACT_APP_API_URL+"/v1/user/Add";
    const response=await axios.post(url,AddUserInfo(userId,firstName,email),config);
    if(response.status===200 || response.status===201)
        return response.data;
    throw response;
}
export async function getUser(id){
    const url=process.env.REACT_APP_API_URL+"/v1/user/"+`${id}`;
    const response=await axios.get(url,config);
    if(response.status===200 || response.status===201)
        return response.data;
    throw response;
}

export async function AddProfile(userId,profile){
    const url=process.env.REACT_APP_API_URL+"/v1/user/"+`${userId}`;
    const response=await axios.patch(url,AddProf(profile),config);
    if(response.status===200 || response.status===201)
        return response.data;
    throw response;
}