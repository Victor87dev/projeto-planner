import { useState } from "react"

import styles from "../project/ProjectForm.module.css"

import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"
import Message from "../layout/Message"

const ServiceForm = ({ handleSubmit, btnText, projectData })=>{

   const [service, setService] = useState({})
   const [message, setMessage] = useState()
   const [type, setType] = useState()

   function submit(e){
    if(service.name === undefined || service.cost === undefined || service.description === undefined || service.name === '' || service.cost === '' || service.description === ''){
      e.preventDefault()
      setMessage('Informações incompletas, certifique-se de completar as informações!')
      setType('error')

      setTimeout(()=>{
        setMessage('')
      }, 2400)

      return false 
    }

     e.preventDefault()

     projectData.services.push(service)
     handleSubmit(projectData)
   }

   function handleChange(e){
     setService({...service, [e.target.name]: e.target.value})
   }

   return(<>
    {message && <Message type={type} msg={message}/>}
    <form onSubmit={submit} className={styles.form}>
        <Input 
         type="text"
         text="Nome do serviço"
         name="name"
         placeholder="Insira o nome do serviço"
         handleOnChange={handleChange}
        />
        <Input 
         type="number"
         text="Custo do serviço"
         name="cost"
         placeholder="Insira o valor total"
         handleOnChange={handleChange}
        />
        <Input 
         type="text"
         text="Descrição do serviço"
         name="description"
         placeholder="Descreva o serviço"
         handleOnChange={handleChange}
        />
        <SubmitButton text={btnText} />
    </form>
    </>
   )

}

export default ServiceForm