import { string } from 'prop-types'
import CircleArrowRightWhite from '../../assets/icons/circle-arrow-right-white.svg'
import './universityCard.scss'

const UniversityCard = (props) => {
  const { name, country, website } = props
  return (
    <div className='unicard__container'>
      <a className='unicard__link' href={website} target='_blank'>
        <div className='unicard__body'>
          <h3 className='unicard__body-name'>{name}</h3>
          <div className='unicard__body-location'>{country}</div>
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
  country: string.isRequired,
  name: string.isRequired,
  website: string.isRequired,
}

export default UniversityCard
