import { useDispatch } from 'react-redux'
import { bool, func, object } from 'prop-types'

import { Actions } from '../../actions/favorite'

import CircleArrowRightWhite from '../../assets/icons/circle-arrow-right-white.svg'
import FavoriteOutlined from '../../assets/icons/favorite-outline-pink.svg'
import FavoriteFilled from '../../assets/icons/favorite-filled-pink.svg'
import './universityCard.scss'

const Heart = ({ isFavorite, onClick }) => {
  const handleOnClick = (e) => {
    e.stopPropagation()
    onClick()
  }
  return (
    <img onClick={handleOnClick} src={isFavorite ? FavoriteFilled : FavoriteOutlined} style={{ padding: '10px' }} />
  )
}

Heart.propTypes = {
  isFavorite: bool,
  onClick: func.isRequired,
}

Heart.defaultProps = {
  isFavorite: false,
}

const UniversityCard = (props) => {
  const {
    university: { name, country, web_pages },
    university,
  } = props
  const dispatch = useDispatch()

  const handleOnFavorite = (university) => () => dispatch(Actions.ADD_FAVORITE_REQUEST(university))

  // we assign onClick function in order for stopPropagation work properly
  const handleCardClick = (web_pages) => () => window.open(web_pages[0], '_blank')

  return (
    <div className='unicard__container'>
      <a className='unicard__link' onClick={handleCardClick(web_pages)}>
        <div className='unicard__body'>
          <div className='unicard__body-left'>
            <h3 className='unicard__body-name'>{name}</h3>
            <div className='unicard__body-location'>{country}</div>
          </div>

          <div className='unicard__body-right'>
            <Heart isFavorite onClick={handleOnFavorite(university)} />
          </div>
        </div>
        <div className='unicard__footer'>
          <div>View website</div>
          <img src={CircleArrowRightWhite} />
        </div>
      </a>
    </div>
  )
}

UniversityCard.propTypes = {
  university: object.isRequired,
}

export default UniversityCard
