import { Container, Navbar, SearchBar } from '../../components'
import { constructQueryParams } from '../../utils/url'
import routesName from '../../constants/routesName'

const App = (props) => {
  const { history } = props

  const handleOnSearch = (value) => {
    const queryString = constructQueryParams({ name: value })
    history.push({
      pathname: routesName.SEARCH_RESULT,
      search: queryString,
    })
  }

  return (
    <Container>
      <Navbar />
      <SearchBar onSearch={handleOnSearch} />
    </Container>
  )
}

export default App
