import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

function Input({children, id, ...props}) {
  const dispatch = useDispatch()
  const state = useSelector(state => state)[id]

  useEffect(() => {
    dispatch({
      type: 'SET_FORM_STATE',
      payload: {[id]: String(children) || ''}
    })
  }, [])
  
  const inputHandler = (e) => {
    dispatch({
      type: 'SET_FORM_STATE',
      payload: {[id]: e.target.value}
    })
  }
  
  return <input value={state} onChange={inputHandler} />
}

export default Input