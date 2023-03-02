import React from 'react'

function Option({id, value, children, ...props}) {
    return <option value={value} {...props}>{children}</option>
}

export default Option