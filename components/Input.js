import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import Checkbox from "./Checkbox";
import Radio from "./Radio";

function Input({insertID, id, children, type, value, ...props}) {
  if (insertID === undefined) insertID = true
  const dispatch = useDispatch()
  const state = useSelector(state => state)[id]

  const inputLabelHandler = () => {
    if (children) return children
    if (props.label) return props.label
    return ''
  }

  useEffect(() => {
    if (type?.toLowerCase() !== 'button' && type?.toLowerCase() !== 'submit' && 
     type?.toLowerCase() !== 'checkbox' && type?.toLowerCase() !== 'radio') {
      dispatch({
        type: 'SET_FORM_STATE',
        payload: {[id]: value ? value : ''}
      })
    }
  }, [])
  
  const inputHandler = (e) => {
    dispatch({
      type: 'SET_FORM_STATE',
      payload: {[id]: e.target.value}
    })
  }
  
  switch (type?.toLowerCase()) {
    case 'submit':
    case 'button':
      return <input type={'button'} id={insertID ? id : null}
        value={children} {...props} />
    
    case 'checkbox':
      return <Checkbox insertID={insertID} id={id} {...props}
        value={value}>{children}</Checkbox>
    
    case 'radio':
      return <Radio insertID={insertID} id={id} {...props}
        value={value}>{children}</Radio>
  
    default:
      const label = inputLabelHandler();
      return (
        <Fragment>
          {(insertID && label) && <label htmlFor={id}>{label}</label>}
          <input value={state ? state: ''} id={insertID ? id : null}
            onChange={inputHandler} {...props} type={type} />
        </Fragment>
      )
  }
}

export default Input