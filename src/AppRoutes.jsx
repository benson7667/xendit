import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  LoginPage,
  RegisterPage,
  HomePage,
  FavouritesPage,
  NewsLetterPage,
  NotFoundPage,
  SearchResultPage,
} from '../src/pages'
import routesName from './constants/routesName'
import PublicRoute from './router/publicRoute'

const App = () => {
  const isUserAuthenticated = useSelector((state) => state.auth.isUserAuthenticated)

  return (
    <>
      <Router>
        <Switch>
          <PublicRoute authed={isUserAuthenticated} component={LoginPage} exact path={routesName.LOGIN} />
          <PublicRoute authed={isUserAuthenticated} component={RegisterPage} exact path={routesName.REGISTER} />

          <Route component={HomePage} exact path={routesName.HOME} />
          <Route component={FavouritesPage} exact path={routesName.FAVOURITE} />
          <Route component={NewsLetterPage} exact path={routesName.NEWSLETTER} />
          <Route component={SearchResultPage} exact path={routesName.SEARCH_RESULT} />

          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  )
}

export default App
