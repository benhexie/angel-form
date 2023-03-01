import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

function Input({id, children, value, ...props}) {
  const dispatch = useDispatch()
  const state = useSelector(state => state)[id]

  const inputContentHandler = () => {
    if (value) return value
    if (children) return children
    return ''
  }

  useEffect(() => {
    dispatch({
      type: 'SET_FORM_STATE',
      payload: {[id]: inputContentHandler()}
    })
  }, [])
  
  const inputHandler = (e) => {
    dispatch({
      type: 'SET_FORM_STATE',
      payload: {[id]: e.target.value}
    })
  }
  
  return <input value={state ? state: ''} 
            onChange={inputHandler} {...props} />
}

export default Input