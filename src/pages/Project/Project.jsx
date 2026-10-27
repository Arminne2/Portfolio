import './project.css'
import { useParams } from "react-router-dom"
import { getProjectById } from '../../data/project';
import Article from '../../components/article/Article';
import Tech from '../../components/tech/tech';
import Slideshow from '../../components/slideshow/Slideshow';


const Project = () => {

    const { id }= useParams();
    const project = getProjectById(parseInt(id))
  

    if (!project) {
    return (
      <div className="page">
        <div className="project-not-found">
          <h1>Projet non trouvé</h1>
          <p>Le projet demandé n'existe pas.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="project">
      <h1 className="projectTitle">{project.title}</h1>
      <a className="github" href={project.repo}>Repo Github</a>
      <Tech name={project.tech}/>
      <Article title={project.title_1} article={project.article_1}/>
      <Article title={project.title_2} article={project.article_2}/>
      <Article title={project.title_3} article={project.article_3}/>
      <h2 className="slideshow-title">Carrousel d'images du projet</h2>
      <Slideshow slideshowvalue={project.pictures} slideshowtitle={project.pictures_title}/>
    </div>
      
  )
}

export default Project

