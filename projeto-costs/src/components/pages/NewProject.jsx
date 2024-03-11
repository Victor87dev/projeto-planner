import React from "react";
import styles from "./NewProject.module.css"
import ProjectForm from "../project/ProjectForm";
import { useNavigate } from "react-router-dom"

const NewProject = ()=>{

    const navigate = useNavigate()

    const createPost = (project)=>{
      // initialize cost and services
      project.cost = 0
      project.services = []

      fetch('https://db-json-server-six.vercel.app/projects',{
      method: "POST",
      headers: {
      'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
      })
      .then((resp) => resp.json())
      .then((data) => {
       console.log(data)
       
      })
      .catch((err) => console.log(err))
      // redirect
      navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } })
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject
