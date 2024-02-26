import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import Styles from "./Footer.module.css"

const Footer = ()=>{
  return(
    <footer className={Styles.footer}>
        <ul className={Styles.social_list}>
            <li>
             <FaFacebook/>
            </li>
            <li>
             <FaInstagram/>
            </li>
            <li>
             <FaLinkedin/>
            </li>  
        </ul>
        <p className={Styles.copy_right}><span>Planner</span> &copy; 2024</p>
    </footer>
  )
}

export default Footer