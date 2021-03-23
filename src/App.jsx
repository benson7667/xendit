import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, FavouritesPage, NewsLetterPage, NotFoundPage } from '../src/pages'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route component={HomePage} exact path='/' />
          <Route component={FavouritesPage} exact path='/favourites' />
          <Route component={NewsLetterPage} exact path='/newsletter' />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  )
}

export default App
