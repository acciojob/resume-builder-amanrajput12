import React, { useState } from 'react'
import style from "./style.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { addEducation, deleteEducation } from '../Store/EducationSlice';

const Education = () => {
  const dispatch = useDispatch();
  const Educationdata = useSelector((store)=>store.education);

    const initialState = {
    courseName: '',
    completionYear: '',
    college: '',
    percentage: ''
  };
  const [data,setData] = useState(initialState)

  const handlechange=(e)=>{
      const {name,value}=e.target;
      setData({...data,[name]:value})
      console.log("name value are",e.target.name,value,data);
      
  }

  const handleAdd=()=>{
    const {college,completionYear,courseName,percentage}=data;
    if(!(college && completionYear && courseName && percentage)){
      alert("All field required to filled");
      return
    }
    dispatch(addEducation(data));
    setData(initialState)
  }

  return (
    <div>
       <p>Add your Education details</p>
       <section>
        <label>
        <input value={data.courseName} onChange={handlechange} name='courseName' type="text" placeholder='Course Name*' />
        </label>
        <label>
          <input value={data.completionYear} onChange={handlechange} name='completionYear' type="text" placeholder='Completion Year*' />
        </label>

       </section>

       <section>
        <label>
        <input value={data.college} onChange={handlechange} name='college' type="text" placeholder='College/School*' />
        </label>
        <label>
        <input value={data.percentage} onChange={handlechange} name='percentage' type="text" placeholder='Percentage*' />
        </label>
       </section>
       <span>
        <button onClick={()=>dispatch(deleteEducation())} id='add_education'>DELETE</button>
        <button onClick={handleAdd} id='delete' className={style.btn}>ADD EDUCATION</button>
       </span>

    </div>
  )
}

export default Education