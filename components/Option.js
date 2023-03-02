import React from 'react'
import { useDispatch } from 'react-redux'

function Option({id, value, children, ...props}) {
    
    // useDispatch

    return <option value={value} {...props}>{children}</option>
}

export default Option