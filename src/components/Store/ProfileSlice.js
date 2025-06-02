import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    fname:null,
    lname:null,
    phone:null,
    address:null,
    url:null
};

const ProfileSlice = createSlice({
    name:"profile",
       initialState ,
       reducers:{
        addProfile:(state,action)=>{
            console.log("action",action);
            state[action.payload.field]=action.payload.value;
        }
       }
});

export const {addProfile} = ProfileSlice.actions;

export default ProfileSlice.reducer

