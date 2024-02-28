import React, { Component } from "react";
import { Link } from "react-router-dom"
import Container from "./Container";
import Logo from "../../img/img_costs.png"
import Styles from "./Navbar.module.css"

class Navbar extends Component {

  state = { clicked: false };
  handleClick = () =>{
    this.setState({clicked:
      !this.state.clicked})
  }
  render() {
    return(
      <nav className={Styles.navbar}>
        <Container>
            <Link to="/"><img className={Styles.img_item} src={Logo} alt="Costs" /></Link>
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
        <div className={Styles.mobile} onClick={this.handleClick}>
          <i id="bar"
          className={
            this.state.clicked ? 
            'fas fa-times' : 'fas fa-bars'
          } 
          ></i>
        </div>
      </nav>
      
    )
}
}

export default Navbar