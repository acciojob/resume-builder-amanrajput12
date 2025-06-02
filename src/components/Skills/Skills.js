import React, { useState } from 'react'
import style from "../Education/style.module.css"
import { useDispatch } from 'react-redux';
import { addSkill, deleteSkill } from '../Store/SkillSlice';
const Skills = () => {
  const [skill,setSkill] = useState("");
  const dispatch = useDispatch()
  const handlechange =(e)=>{
    const {name,value} = e.target;
      setSkill(value)
  }
  const handleAdd=()=>{
     dispatch(addSkill(skill))
  }
  return (
    <div>
      <p>Add your Skills</p>
      <label>
        <input onChange={handlechange} name='skill' type='text'  placeholder='Skill*' />
      </label>

      <span>
              <button onClick={()=>dispatch(deleteSkill())}  id='delete_skill'>DELETE SKILL</button>
              <button onClick={handleAdd} id='add_skill' className={style.btn}>ADD SKILL</button>
             </span>
    </div>
  )
}

export default Skills