import { Navbar, SearchBar } from '../../components'
import { constructQueryParams } from '../../utils/url'
import routesName from '../../constants/routesName'

const App = (props) => {
  const { history } = props

  const handleOnSearch = (value) => {
    const queryString = constructQueryParams({ q: value })
    history.push({
      pathname: routesName.SEARCH_RESULT,
      search: queryString,
    })
  }

  return (
    <>
      <Navbar />
      <SearchBar onSearch={handleOnSearch} />
    </>
  )
}

export default App
