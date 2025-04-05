import React from 'react'
import './Projet.css'

const Projects = [
  {
    title: "project 01",
    description: "i'm fullstack developper, i'm student in application developpement",
    link:"",
    image:"../../../public/ChatGPT Image Apr 4 2025 (1).png"
  },
  {
    title: "project 02",
    description: "i'm fullstack developper, i'm student in application developpement",
    link:"",
    image:"../../../public/ChatGPT Image Apr 4 2025 (1).png"
  },
  {
    title: "project 03",
    description: "i'm fullstack developper, i'm student in application developpement",
    link:"",
    image:""
  },
  {
    title: "project 04",
    description: "i'm fullstack developper, i'm student in application developpement",
    link:"",
    image:""
  },
  {
    title: "project 05",
    description: "i'm fullstack developper, i'm student in application developpement",
    link:"",
    image:""
  },
  {
    title: "project 06",
    description: "i'm fullstack developper, i'm student in application developpement",
    link:"",
    image:""
  }
]

const Projet = () => {
  return(
    <>
    <h1> Projets </h1>
    <div className='Projects'>
      {
        Projects.map((project, index) => (
          <div key={index} className='project_card' >
            <div className="project_text">
              <h3> {project.title} </h3>
              <p> {project.description} </p>
              <p> {project.link} </p>
            </div>
            <div className='project_image'>
               <img src={project.image} alt="project_image" /> 
            </div>
          </div>
        ))
      }
      
    </div>
    </>
  ) 
}

export default Projet