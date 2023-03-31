export const AddUserInfo=(userId,firstName,email)=>{
    return {"userId":userId,
    "firstName":firstName,
    "email":email}
}
export const AddProf=(profile)=>{
    return {"profile":profile}
}
export const AddPass=(password,email,color)=>{
    return {"password":password,"email":email,"color":color}
}
export const UpdatePass=(updatedProfile,password,email,color)=>{
    return {"profile":updatedProfile,"password":password,"email":email,"color":color}
}