import React, { useState } from 'react'
import style from "./Style.module.css"
import { useDispatch } from 'react-redux';
import { addSocial, deleteSocial } from '../Store/SocialSlice';
const Social = () => {

  const [social,setSocial] = useState("");
  const dispatch = useDispatch();
const handlechange=(e)=>{
const  {name,value} =e.target
  setSocial(value)
}

const handleAdd=()=>{
  if(social==''){
    alert("All field required");
    return
  }
      dispatch(addSocial(social))
      setSocial("")
}


  return (
    <div>
      <p>Add social links linkedIn,github etc</p>
      <label>
        <input value={social} onChange={handlechange} name='Social' type="text" placeholder='Social Links*'/>
      </label>

      <span>
              <button onClick={()=>dispatch(deleteSocial())} >DELETE  SOCIAL </button>
              <button onClick={handleAdd} id='add_social' className={style.btn}>ADD SOCIAL</button>
            </span>
    </div>
  )
}

export default Social