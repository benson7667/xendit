import { useRouteMatch } from 'react-router-dom'
import cx from 'classnames'
import { Link } from '../../components'
import routesName from '../../constants/routesName'
import './navbar.scss'

const Navbar = () => {
  const getLinkActiveState = (pathName) => {
    return useRouteMatch({
      path: pathName,
      strict: true,
      sensitive: true,
      exact: true,
    })
  }

  return (
    <div className='navbar__container'>
      <ul className='navbar__menus'>
        <Link
          className={cx({ 'navbar__menus-item': true, active: getLinkActiveState(routesName.HOME) })}
          label='Home'
          to={routesName.HOME}
        />
        <Link
          className={cx({ 'navbar__menus-item': true, active: getLinkActiveState(routesName.FAVOURITE) })}
          label='Favourites'
          to={routesName.FAVOURITE}
        />
        <Link
          className={cx({ 'navbar__menus-item': true, active: getLinkActiveState(routesName.NEWSLETTER) })}
          label='Newsletter'
          to={routesName.NEWSLETTER}
        />
      </ul>

      <div className='navbar__auth'>
        <div className='navbar__auth-avatar'></div>
        <div className='navbar__auth-name'>LOGIN</div>
      </div>

      {/* <div className='navbar__auth'>
                <div className='navbar__auth-login'>LOGIN</div>
            </div> */}
    </div>
  )
}

export default Navbar
