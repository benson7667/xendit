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

  const renderContent = () => {
    if (isLoading) return <h1>Loading...</h1>

    if (!isLoading && !favoriteList.length) return <h1>YOU HAVENT ADD ANY FAVOURITE UNIVERSITY</h1>

    if (!isLoading && favoriteList.length)
      return (
        <div className='container__grid'>
          {favoriteList.map((item, index) => (
            <UniversityCard key={index} university={item} />
          ))}
        </div>
      )
  }

  return (
    <Container>
      <Navbar />
      <div className='container__grid'>{renderContent()}</div>
    </Container>
  )
}

export default Favourites
