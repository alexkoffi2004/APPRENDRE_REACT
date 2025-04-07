import React from 'react'
import './Projet.css'
import { Link } from 'react-router-dom'
import { useOutletContext } from "react-router";



// function Projects() {
  
// }

const Projet = ({ProjectData}) => {
  const context = useOutletContext();
  const Projects = ProjectData || context?.Project || [];
  return(
    <>
    <h1> Projets </h1>
    <div className='Projects'>
      {
        Projects?.map((project, index) => (
          <div key={index} className='project_card' >
            <div className="project_text">
              <h3> {project.title} </h3>
              <p> {project.description} </p>
              
              <Link to={project.link} className='link'>
              Repos
              </Link>
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


// const Projects = [
//   {
//     title: "project 01",
//     description: "i'm fullstack developper, i'm student in application developpement",
//     link:"https://github.com/alexkoffi2004/front-end-Mentor-1-tailwind.git",
//     image:"../../../public/ChatGPT Image Apr 4 2025 (1).png"
//   },
//   {
//     title: "project 02",
//     description: "i'm fullstack developper, i'm student in application developpement",
//     link:"",
//     image:"../../../public/ChatGPT Image Apr 4 2025 (1).png"
//   },
//   {
//     title: "project 03",
//     description: "i'm fullstack developper, i'm student in application developpement",
//     link:"",
//     image:""
//   },
//   {
//     title: "project 04",
//     description: "i'm fullstack developper, i'm student in application developpement",
//     link:"",
//     image:""
//   },
//   {
//     title: "project 05",
//     description: "i'm fullstack developper, i'm student in application developpement",
//     link:"",
//     image:""
//   },
//   {
//     title: "project 06",
//     description: "i'm fullstack developper, i'm student in application developpement",
//     link:"",
//     image:""
//   }
// ]