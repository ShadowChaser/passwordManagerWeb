export const AddUserInfo=(userId,firstName,email)=>{
    return {"userId":userId,
    "firstName":firstName,
    "email":email}
}
export const AddProf=(profile)=>{
    return {"profile":profile}
}
export const AddPass=(profile,email,password,color)=>{
    
    return {"profile":profile,
    "profileEmail":email,
    "profilePassword":password,
    "profileColor":color}
}
export const UpdatePass=(updatedProfile,password,email,color)=>{
    return {"profile":updatedProfile,"password":password,"email":email,"color":color}
}