import './button.scss'

const Button = (props) => {
  const { value, onClick } = props

  return (
    <button className='app__button' onClick={onClick}>
      {value}
    </button>
  )
}

export default Button
