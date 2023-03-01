import React, { useState } from "react"

const Form = ({children, ...props}) => {
  const [state, setState] = useState({})

  // I'm trying to return a normal array here, 
  // instead I'm getting JSX
  return [
    <form {...props}>{children}</form>, 
    JSON.stringify(state)
  ]
}

export default Form