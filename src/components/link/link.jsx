import { Link as ReactRouterLink } from 'react-router-dom'
import { string } from 'prop-types'
import cx from 'classnames'
import './link.scss'

const Link = ({ className, label, to }) => {
  return (
    <ReactRouterLink className={cx({ [className]: true, link__default: true })} to={to}>
      {label}
    </ReactRouterLink>
  )
}

Link.propTypes = {
  className: string,
  label: string,
  to: string,
}

export default Link
