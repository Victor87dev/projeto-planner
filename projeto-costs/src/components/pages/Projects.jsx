import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import Message from "../layout/Message"
import styles from "./Projects.module.css"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import Loading from "../layout/Loading"
import ProjectCard from "../project/ProjectCard"

const Projects = ()=>{

  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [projectMessage, setProjectMessage] = useState('')

  const location = useLocation()
  let message = ''
  if(location.state && projects.length > 0){
    message = location.state.message
  }

  useEffect(()=>{
    setTimeout(()=>{
      fetch('https://db-json-server-six.vercel.app/projects',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        })
        .then((resp)=>resp.json())
        .then(data => {
          setProjects(data)
          setRemoveLoading(true)
        })
        .catch((err)=>console.log(err))
        
    }, 300)
   
  }, [])

  function removeProject(id){

    setProjectMessage('')

    fetch(`https://db-json-server-six.vercel.app/projects/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        })
        .then((resp)=>resp.json())
        .then(() => {
          
        })
        .catch((err)=>console.log(err))
        setProjects(projects.filter((project) => project.id !== id))
        setProjectMessage('Projeto removido com sucesso!')

        setTimeout(()=>{
          setProjectMessage('')
        }, 1800)
  }

  return(
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Meus Projetos</h1>
        <LinkButton className={styles.btnResponsivo} to="/newproject" text="Criar Projeto"/>
      </div>
      {message && <Message  type="sucess" msg={message}/>}
      {projectMessage && <Message  type="sucess" msg={projectMessage}/>}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard 
            id={project.id}
            name={project.name}
            budget={project.budget}
            category={project.category.name}
            key={project.id}
            handleRemove={removeProject}
            />
          ))}
          {!removeLoading && <Loading />}
          {removeLoading && projects.length === 0 && (
            <p>Não há projetos cadastrados!</p>
          )
          }
      </Container>
    </div>
  )
}

export default Projects
