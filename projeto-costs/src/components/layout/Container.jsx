import React from "react";
import Styles from "./Container.module.css"

const Container = (props)=>{
  return (
    <div className={`${Styles.container} ${Styles[props.customClass]}`}>{props.children}</div>
  )
}

export default Container 