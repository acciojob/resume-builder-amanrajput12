
import { configureStore } from "@reduxjs/toolkit";
import ProfileSlice from "./ProfileSlice"
import EducationSlice from "./EducationSlice"
import SkillSlice from "./SkillSlice"
import miniSlice from "./MiniProjectSlice"
import SocialSlice from "./SocialSlice"
export const Store = configureStore({
    reducer:{
      profile:ProfileSlice,
      education:EducationSlice,
      skill:SkillSlice,
      mini:miniSlice,
      social:SocialSlice
    }
})