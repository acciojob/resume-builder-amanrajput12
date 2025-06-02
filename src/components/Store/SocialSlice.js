import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    social:null
}

const SocialSlice = createSlice({
    name:"social",
       initialState,
       reducers:{
        addSocial:(state,action)=>{
            console.log("action",action.payload)
            state.social=action.payload
        },
        deleteSocial:(state)=>{
            return initialState
        }
       }
})

export const {addSocial,deleteSocial} = SocialSlice.actions

export default SocialSlice.reducer