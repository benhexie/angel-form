import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

function Select({id, children, ...props}) {
    const dispatch = useDispatch()
    const selectRef = useRef(null)

    useEffect(() => {
        dispatch({
            type: 'SET_FORM_STATE',
            payload: {[id]: selectRef.current.value}
        })
    }, [])

    const selectChangeHandler = (e) => {
        dispatch({
            type: 'SET_FORM_STATE',
            payload: {[id]: e.target.value}
        })
    }

    const options = children?.map((option, index) => {
        const {children: optionChildren, ...optionProps} = option.props
        return <option key={index} id={id} {...optionProps}>
                    {optionChildren}
                </option>
    })
    return <select ref={selectRef} onChange={selectChangeHandler} 
        {...props}>{options}</select>
}

export default Select