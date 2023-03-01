import { Provider } from 'react-redux'
import store from "../store"

const Form = ({children, ...props}) => {
  return (
    <Provider store={store}>
      <form {...props}>{children}</form>
    </Provider>
  )
}

export default Form