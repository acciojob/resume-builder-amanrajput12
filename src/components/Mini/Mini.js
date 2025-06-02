import React, { useState } from 'react'
import style from "./style.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { addMiniProject, deleteMiniProject } from '../Store/MiniProjectSlice';
const Mini = () => {

const initialState ={
  projectName:'',
  techStack:'',
  description:'',

}
const [project,setProject]= useState(initialState);
const dispatch = useDispatch();
const mini = useSelector((store)=>store.mini)
console.log("mini ",mini)


const handlechange=(e)=>{
  const {name,value} = e.target
setProject({...project,[name]:value})
}

console.log("data is ",project)
const handleAdd=()=>{
  const {projectName,techStack,description} = project
   if(!(projectName && techStack && description)){

    alert("All filed are required");
    return
   }
      dispatch(addMiniProject(project));
      setProject(initialState)

}


  return (
    <div>
      <section>
        <label>
          <input value={project.projectName} onChange={handlechange} name='projectName' type='text' placeholder='Project Name*' />
        </label>
        <label>
          <input value={project.techStack} onChange={handlechange} name='techStack' type='text' placeholder='Tech Stack' />
        </label>
        <label>
          <input value={project.description} onChange={handlechange} name='description' type='text' placeholder='Description' />
        </label>
      </section>


      <span>
        <button onClick={()=>dispatch(deleteMiniProject())} id='delete'>DELETE </button>
        <button onClick={handleAdd} id='add_project' className={style.btn}>ADD PROJECT</button>
      </span>
    </div>
  )
}

export default Mini