import React, { useEffect } from 'react'
import style from "./style.module.css"
import { useLocation, useParams } from 'react-router-dom';
const Header = () => {

  const sections = [
    { path:"", label: 'Profile Section' },
    { path:"Education", label: 'Education Section' },
    { path:"Skills", label: 'Skills Section' },
    { path:"Mini", label: 'Mini Project' },
    { path:"Social", label: 'Social' }
  ];

     const params = useLocation();
     const pathname = params.pathname.replace("/","");
     console.log("params",pathname)
  return (
    <div>
        <div className={style.heading}>
            RESUME GENERATOR
        </div>
        
         <div className={style.headers}>  
           {sections.map((section,i) => (
          <span 
            key={section.path}
            className={`${style.list} ${pathname==section.path ? style.active:""} `}
          >
            <p>{i+1}</p>
            {section.label}
            {section.id !== 5 && <span></span>}
          </span>
        ))}
           </div>

    </div>
  )
}

export default Header