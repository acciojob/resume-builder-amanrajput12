import { createSlice } from "@reduxjs/toolkit";


const initialState ={
  projectName:null,
  techStack:null,
  description:null,

}
const MiniProjectSlice = createSlice({
    name:"mini",
    initialState,
    reducers:{
        addMiniProject:(state,action)=>{
            const {projectName,techStack,description} =action.payload;
            console.log("add mini",action.payload)
            state.projectName=projectName;
            state.techStack=techStack;
            state.description=description
        },
        deleteMiniProject:(state)=>{
            return initialState
        }
    }  
})

export const {addMiniProject,deleteMiniProject} = MiniProjectSlice.actions


export default MiniProjectSlice.reducer