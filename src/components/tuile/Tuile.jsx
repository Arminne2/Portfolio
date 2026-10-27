import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState} from 'react'
import { project } from '../../data/project';
import "./tuile.css";

const Tuile = () => {


  return (
    <>
    <ul className="container">
    {project.map((project)=>(
    <Link to={`/project/${project.id}`} className="project-card-link" key={project.id}>
         <div className="file"></div>
        <div className={`project-tuile ${project.id}`}>
    <h2>{project.title}</h2>
        <p>{project.description}</p>
        </div>
            </Link>
        ))}
    </ul>
    </>
  )
}

export default Tuile