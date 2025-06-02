import React from 'react'
import { useSelector } from 'react-redux';

const Resume = () => {
    const profile = useSelector((store)=>store.profile);
      const education = useSelector((store)=>store.education)
      const skill = useSelector((store)=>store.skill)
      const mini = useSelector((store)=>store.mini)
      const socialdata = useSelector((store)=>store.social)
        const { fname, lname, phone, address, url } = profile;
  const { college, completionYear, courseName, percentage } = education;
  const { projectName, techStack, description } = mini;
  const { social } = socialdata;
  const { skilldata } = skill;
    
  return (
    <div>
        <p>All steps completed - your resume is ready!!</p>
        <span>
            <button>RESET</button>
            <button>EDIT</button>
        </span>
        <button>DOWNLOAD/PREVIEW</button>
        <div>
            <section>
                <h1>{fname} {lname}</h1>
                <h3>Address: ${address}</h3>
                  <h3>Phone Number: ${phone}</h3>  
            </section>
            <section>
                <div>
                    <h2>Skills</h2>
                    <hr/>
                     {skilldata.map((skill,i)=><h3 key={i}>{skill}</h3>)}
                </div>
                <div>
                   <h2>Education</h2>
                    <h3>College ${college}</h3>
                    <h3>Graduation Year : ${completionYear}</h3>
                    <h3>Course ${courseName}</h3>
                    <h3>Percentage ${percentage}</h3>
                </div>
            </section>
            <section>
                <h2>Mini Projects</h2>
                <hr/>
                <h3>Name ${projectName}</h3>
                <h3>Description ${description}</h3>
                <h3>Tech Stack : ${techStack}</h3>
            </section>
            <section>
                <h2>Social Links</h2>
                <hr/>
                <a href={social}>Social</a>
            </section>
        </div>
    </div>
  )
}

export default Resume