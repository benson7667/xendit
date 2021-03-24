import { node, object } from 'prop-types'
import './container.scss'

const Container = ({ children, style }) => {
  return (
    <div className='app__container' style={style}>
      {' '}
      {children}
    </div>
  )
}

Container.propTypes = {
  children: node,
  style: object,
}

export default Container
