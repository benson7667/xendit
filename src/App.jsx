import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, FavouritesPage, NewsLetterPage, NotFoundPage, SearchResultPage } from '../src/pages'
import routesName from './constants/routesName'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
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
