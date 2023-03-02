import React, { Fragment, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Radio({insertID, id, children, name, ...props}) {
    if (insertID === undefined) insertID = true
    const dispatch = useDispatch()
    const checkboxRef = useRef(null)

    const value = props.value ? props.value : children
    let state = useSelector(state => state)[name]
    state = Array.isArray(state) ? state : []

    useEffect(() => {
        if (props.defaultChecked) {
            dispatch({
                type: 'SET_FORM_STATE',
                payload: {[name]: value}
            })
        }
    }, [])

    const checkedChangeHandler = (e) => {
        if (e.target.checked) {
            dispatch({
                type: 'SET_FORM_STATE',
                payload: {[name]: value}
            })
        }
    }

  return (
    <Fragment>
        <label htmlFor={id}>{children}</label>
        <input id={insertID ? id : null}
          ref={checkboxRef} onChange={checkedChangeHandler} 
          name={name} {...props} type={'radio'} />
    </Fragment>
  )
}

export default Radio