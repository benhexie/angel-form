import { Provider } from 'react-redux'
import store from "../store"

const Form = ({stateHandler, children, ...props}) => {

  store.subscribe(() => {
    stateHandler(store.getState())
  })

  return (
    <Provider store={store}>
      <form {...props}>{children}</form>
    </Provider>
  )
}

export default Form