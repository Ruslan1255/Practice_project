import React from 'react' 
import "./modalBtn.css" 
 
const modalBtn = ({btnText,type,handleClick}) => { 
  return ( 
    <>
    <button className={`btn ${type}`} onClick={handleClick}>{btnText}</button> 
    </>
  ) 
} 
 
 
export default modalBtn