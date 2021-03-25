import { string, oneOf, object } from 'prop-types'
import cx from 'classnames'
import './alert.scss'

const Alert = (props) => {
  const { style, message, color } = props
  return (
    <div
      className={cx({
        alert__container: true,
        [color]: true,
      })}
      style={style}
    >
      <span className='alert__text'>{message}</span>
    </div>
  )
}

Alert.propTypes = {
  color: oneOf(['danger', 'success', 'warn']),
  message: string.isRequired,
  style: object,
}

Alert.defaultProps = {
  color: 'warn',
}

export default Alert
