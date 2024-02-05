import React from 'react'

const Input = ({value}) => {
  function onChangeHandler(e){
     value(e.target.value)
  }

  return (
    <>
      <input onChange={onChangeHandler}></input>
    </>
  )
}

export default Input