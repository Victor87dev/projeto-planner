import { useState, useEffect} from "react"
import styles from "./ProjectForm.module.css"
import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import Message from "../layout/Message"

const ProjectForm = ({ handleSubmit, btnText, projectData})=>{

  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})
  const [message, setMessage] = useState()
  const [type, setType] = useState()

  useEffect(()=>{
    fetch("https://db-json-server-six.vercel.app/categories",{
     method: "GET",
     headers: {
      'Content-Type': 'application/json'
     }
    })
    .then((resp) => resp.json())
    .then((data) => {
      setCategories(data)
    })
    .catch((err) => console.log(err))
  }, [])
  
  const submit = (e)=>{
    if(project.name === undefined || project.budget === undefined || project.category === undefined || project.name === '' || project.budget === '' || project.category.name === 'Selecione uma opção'){
      e.preventDefault()
      setMessage('Informações incompletas, certifique-se de completar as informações!')
      setType('error')
      console.log('meu erro')

      setTimeout(()=>{
        setMessage('')
      }, 2400)

      return false 
    }
    console.log('funciona')
    e.preventDefault()
    // console.log(project)
    handleSubmit(project)
    
  }

  function handleChange(e){
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  function handleCategory(e){
    setProject({ 
      ...project,
      category: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text,
      },
    })
    
  }

  return(<>
  {message && <Message type={type} msg={message}/>}
    <form onSubmit={submit} className={styles.form}>
        <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" handleOnChange={handleChange} value={project.name ? project.name : ''}/>
        <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total" handleOnChange={handleChange} value={project.budget ? project.budget : ''}/>
        <Select name="category_id" text="Selecione a categoria" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''}/>
        <SubmitButton text={btnText}/>
    </form>
  </>
    
  )
}

export default ProjectForm