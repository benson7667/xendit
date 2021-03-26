import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BackButton, Container, Navbar, UniversityCard } from '../../components'
import { parseQueryString } from '../../utils/url'
import { Actions as SearchAction } from '../../actions/search'
import { Actions as FavoriteAction } from '../../actions/favorite'
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
    dispatch(SearchAction.GET_SEARCH_REQUEST({ ...query }))
  }, [])

  const handleOnFavoriteClick = (university, isFavorite) => {
    // add item to favorite
    if (!isFavorite) {
      return dispatch(FavoriteAction.ADD_FAVORITE_REQUEST(university))
    }

    // remove item from favorite
    dispatch(FavoriteAction.REMOVE_FAVORITE_REQUEST(university))
  }

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
          <UniversityCard key={index} onFavoriteClick={handleOnFavoriteClick} university={item} />
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
