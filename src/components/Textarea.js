import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Textarea({insertID, id, children, value, ...props}) {
    if (insertID === undefined) insertID = true
    const dispatch = useDispatch()
    const state = useSelector(state => state)[id]

    useEffect(() => {
        dispatch({
            type: 'SET_FORM_STATE',
            payload: {[id]: value ? value : ''}
        })
    }, [])

    const inputLabelHandler = () => {
        if (children) return children
        if (props.label) return props.label
        return ''
    }

    const inputHandler = (e) => {
        dispatch({
          type: 'SET_FORM_STATE',
          payload: {[id]: e.target.value}
        })
    }

    const label = inputLabelHandler();
    return (
    <Fragment>
        {(insertID && label) && <label htmlFor={id}>{label}</label>}
        <textarea value={state ? state: ''} id={insertID ? id : null}
        onChange={inputHandler} {...props} />
    </Fragment>
)
}

export default Textarea