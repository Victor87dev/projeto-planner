import React from "react";
import { Link } from "react-router-dom"
import Container from "./Container";
import Logo from "../../img/img_costs.png"
import "./Navbar.css"
import { useState } from "react";

function Navbar() {

  const [active, setActive] = useState('nav')
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')
  
  const navToggle = () =>{
    active === 'nav' ? setActive('nav nav__active') : setActive('nav')

    // TogglerIcon

     toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler')
  }

    return(
      <nav className="navbar">
        <Container customClass="space">
            <Link to="/"><img className="img_item" src={Logo} alt="Costs" /></Link>
            <ul className={active}>
                <li className="item">
                  <Link to="/">Home</Link>
                </li>
                <li className="item">
                  <Link to="/projects">Projetos</Link>
                </li>
                <li className="item">
                   <Link to="/company">Empresa</Link>
                </li>
                <li className="item">
                   <Link to="/contact">Contato</Link> 
                </li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
        </Container>
      </nav>
      
    )
}

export default Navbar