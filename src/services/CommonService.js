import axios from "axios";
import { AddUserInfo } from "./CommonMetaData";

export async function AddUser(userId,firstName,email){
    const url=process.env.REACT_APP_API_URL+"/v1/user/Add";
    const response=await axios.post(url,AddUserInfo(userId,firstName,email));
    if(response.status===200 || response.status===201)
        return response.data;
    throw response;
}