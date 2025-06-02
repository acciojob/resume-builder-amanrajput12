import { createSlice } from "@reduxjs/toolkit";


const initialState  = {
    skilldata:null,
 
};
const SkillSlice = createSlice({
    name:"skill",
    initialState,
      reducers:{
        addSkill:(state,action)=>{
           let skill = action.payload.split(",");
           console.log(skill)
           state.skilldata=[];
           skill.map((data,i)=>{
             state.skilldata.push(data)
           })
        },
        deleteSkill:(state)=>{
            return initialState
        }
      }
})

export const {addSkill,deleteSkill} = SkillSlice.actions

export default SkillSlice.reducer