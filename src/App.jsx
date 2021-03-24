import { Provider } from 'react-redux'
import AppRoutes from './AppRoutes'
import store from './store'
import '../src/assets/styles/index.scss'

const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
}

export default App
