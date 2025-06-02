import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    courseName:null,
    completionYear:null,
    college:null,
    percentage:null,
   
};

const EducationSlice = createSlice({
    name:"profile",
       initialState ,
       reducers:{
        addEducation:(state,action)=>{
            console.log("action in educationslice",action);
            const {college,completionYear,courseName,percentage}=action.payload;
            state.college=college;
            state.completionYear=completionYear;
            state.courseName=courseName;
            state.percentage=percentage
            // state[action.payload.field]=action.payload.value;
        },
        deleteEducation:(state)=>{
             return initialState
        }
       }
});

export const {addEducation,deleteEducation} = EducationSlice.actions;

export default EducationSlice.reducer

