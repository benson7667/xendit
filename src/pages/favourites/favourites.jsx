import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Navbar, UniversityCard } from '../../components'
import { Actions } from '../../actions/favorite'
import './style.scss'

const Favourites = () => {
  const dispatch = useDispatch()

  const isLoading = useSelector((state) => state.favorites.isLoadingGetAllFavorite)
  const favoriteList = useSelector((state) => state.favorites.favoriteList)

  useEffect(() => {
    dispatch(Actions.GET_ALL_FAVORITE_REQUEST())
  }, [])

  const handleOnFavoriteClick = (university, isFavorite) => {
    // in favorite page, 'isFavorite' is alwats true
    if (isFavorite) {
      dispatch(Actions.REMOVE_FAVORITE_REQUEST(university))
      const newList = favoriteList.filter((item) => item.name !== university.name)
      dispatch(Actions.GET_ALL_FAVORITE_RESPONSE(newList, null))
    }
  }

  const renderContent = () => {
    if (isLoading) return <h1>Loading...</h1>

    if (!isLoading && !favoriteList.length) return <h1>YOU HAVENT ADD ANY FAVOURITE UNIVERSITY</h1>

    if (!isLoading && favoriteList.length)
      return (
        <div className='container__grid'>
          {favoriteList.map((item) => (
            <UniversityCard key={item.name} onFavoriteClick={handleOnFavoriteClick} university={item} />
          ))}
        </div>
      )
  }

  return (
    <Container>
      <Navbar />
      {renderContent()}
    </Container>
  )
}

export default Favourites
