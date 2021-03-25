import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BackButton, Container, Navbar, UniversityCard } from '../../components'
import { parseQueryString } from '../../utils/url'
import { Actions } from '../../actions/search'
import './styles.scss'

const SearchResult = (props) => {
  const { location } = props

  const dispatch = useDispatch()

  const [results, isLoading, error] = useSelector((state) => [
    state.search.results,
    state.search.isLoading,
    state.search.error,
  ])

  useEffect(() => {
    const query = parseQueryString(location)
    dispatch(Actions.GET_SEARCH_REQUEST({ ...query }))
  }, [])

  const renderContent = () => {
    if (error) {
      return <h1>Something went wrong</h1>
    }

    if (isLoading) {
      return <h1>Loading... </h1>
    }

    if (!isLoading && results && results.length === 0) {
      return <h1>NO RESULT FOUND</h1>
    }

    return (
      <div className='search-result__grid'>
        {results.map((item, index) => (
          <UniversityCard key={index} university={item} />
        ))}
      </div>
    )
  }

  return (
    <Container>
      <Navbar />
      <BackButton label='Back to search' />
      {renderContent()}
    </Container>
  )
}

export default SearchResult
