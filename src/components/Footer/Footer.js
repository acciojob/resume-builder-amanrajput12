import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import style from "./style.module.css"
import { useSelector } from 'react-redux';
const Footer = () => {
  const steps = ['', 'Education', 'Skills', 'Mini', 'Social'];
  const navigate = useNavigate();
  const location = useLocation();


  const currentPath = location.pathname.replace('/', '');
  const index = steps.indexOf(currentPath);
  const profile = useSelector((store)=>store.profile);
  const education = useSelector((store)=>store.education)
  const skill = useSelector((store)=>store.skill)
  const mini = useSelector((store)=>store.mini)
  const socialdata = useSelector((store)=>store.social)
  console.log("footer profile",profile)

  const handlePrev = () => {
    if (index > 0) {
      navigate(`/${steps[index - 1]}`);
    }
  };

  const handleNext = () => {
    if (index < steps.length - 1) {
      navigate(`/${steps[index + 1]}`);
    }
  };

const handlesavecheck = () => {
  const { fname, lname, phone, address, url } = profile;
  const { college, completionYear, courseName, percentage } = education;
  const { projectName, techStack, description } = mini;
  const { social } = socialdata;
  const { skilldata } = skill;

  if (index === 4) {
    if (
      !fname || !lname || !phone || !address || !url ||
      !college || !completionYear || !courseName || !percentage ||
      !projectName || !techStack || !description ||
      !skilldata || !social
    ) {
      alert("Please complete all fields before final submission.");
      return;
    }

    console.log("for submit the detail to final");
    navigate('/resume')
    return;
  }


  switch (index) {
    case 0:
      if (!fname || !lname || !phone || !address || !url) {
        alert('Please fill all profile fields before continuing.');
        return;
      }
      break;
    case 1:
      if (!college || !completionYear || !courseName || !percentage) {
        alert('Please fill all education fields before continuing.');
        return;
      }
      break;
    case 2:
      if (!skilldata) {
        alert('Please fill all Skill fields before continuing.');
        return;
      }
      break;
    case 3:
      if (!projectName || !techStack || !description) {
        alert("Please fill all miniProject fields before continuing.");
        return;
      }
      break;
    default:
      alert("Something went wrong.");
      return;
  }

  // ✅ Passed current page validation, move to next
  handleNext();
};


  return (
    <div className={style.footer} >
      <button onClick={handlePrev}>BACK</button>
      <button className={style.btn} onClick={handleNext} >NEXT</button>
      <button  onClick={handlesavecheck} className={style.btn}>SAVE AND CONTINUE</button>
    </div>
  );
};

export default Footer;
