import { Provider } from 'react-redux'
import AppRoutes from './AppRoutes'
import { AuthListener } from './provider'
import store from './store'
import '../src/assets/styles/index.scss'

const App = () => {
  return (
    <Provider store={store}>
      <AuthListener>
        <AppRoutes />
      </AuthListener>
    </Provider>
  )
}

export default App
