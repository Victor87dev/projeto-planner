import React from "react";
import { Link } from "react-router-dom"
import Container from "./Container";
import Logo from "../../img/costs_logo.png"
import Styles from "./Navbar.module.css"

const Navbar = ()=>{
    return(
      
      <nav className={Styles.navbar}>
        <Container>
            <Link to="/"><img src={Logo} alt="Costs" /></Link>
            <ul className={Styles.list}>
                <li className={Styles.item}>
                  <Link to="/">Home</Link>
                </li>
                <li className={Styles.item}>
                  <Link to="/projects">Projetos</Link>
                </li>
                <li className={Styles.item}>
                   <Link to="/company">Empresa</Link>
                </li>
                <li className={Styles.item}>
                   <Link to="/contact">Contato</Link> 
                </li>
            </ul>
        </Container>
      </nav>
      
    )
}

export default Navbar