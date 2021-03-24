import { func, object, oneOf, string } from 'prop-types'
import './input.scss'

const Input = (props) => {
  const { style, type, value, onChange, placeholder } = props
  return (
    <input
      className='app__input'
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      type={type}
      value={value}
    />
  )
}

Input.propTypes = {
  onChange: func.isRequired,
  placeholder: string,
  style: object,
  type: oneOf(['text', 'password']),
  value: string.isRequired,
}

Input.defaultProps = {
  placeholder: '',
  type: 'text',
}

export default Input
