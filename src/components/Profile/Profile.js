import React from 'react'
import style  from "./style.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { addProfile } from '../Store/ProfileSlice';
const Profile = () => {
  const dispatch = useDispatch();
  const profiledata = useSelector((store)=>store.profile);
  console.log("profile",profiledata)
  const handlechange=(e)=>{
    const {name,value}=e.target
    console.log(name,value)
    dispatch(addProfile({...profiledata,
      field:name,
      value:value,
    }))
    
  }



  return (
    <div className={style.box}>
       <p>Add your profile details</p>
       <form >
       <section>
        <label>
        <input onChange={handlechange} name='fname' type="text" placeholder='First Name' />
        </label>
        <label>
          <input onChange={handlechange} name='lname' type="text" placeholder='Last Name' />
        </label>

       </section>

       <section>
        <label>
        <input onChange={handlechange} name='phone' type="tel" placeholder='Phone Number' />
        </label>
        <label>
        <input onChange={handlechange} name='address' type="text" placeholder='Address' />
        </label>
       </section>
       <span>
        <label htmlFor='url'>Profile Image</label>
        <input onChange={handlechange}  name='url' id='url' type='file' />
       </span>
       </form>
    </div>
  )
}

export default Profile