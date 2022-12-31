import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const Protected = (props) => {
    const Cmp = props.Cmp
  return (

    <div><Cmp/></div>
  )
}

export default Protected