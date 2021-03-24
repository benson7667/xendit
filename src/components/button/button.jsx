import { string, object, func } from 'prop-types'
import './button.scss'

const Button = (props) => {
  const { style, value, onClick } = props

  return (
    <button className='app__button' onClick={onClick} style={style}>
      {value}
    </button>
  )
}

Button.propTypes = {
  onClick: func.isRequired,
  style: object,
  value: string.isRequired,
}

export default Button
