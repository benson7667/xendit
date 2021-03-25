import { useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames'
import { Link } from '../../components'
import routesName from '../../constants/routesName'
import { Actions } from '../../actions/auth'
import LogoutSvg from '../../assets/icons/logout-dark-gray.svg'
import './navbar.scss'

const Navbar = () => {
  const dispatch = useDispatch()

  const isUserAuthenticated = useSelector((state) => state.auth.isUserAuthenticated)
  const userInfo = useSelector((state) => state.auth.userInfo)

  const getLinkActiveState = (pathName) => {
    return useRouteMatch({
      path: pathName,
      strict: true,
      sensitive: true,
      exact: true,
    })
  }

  const handleLogout = () => dispatch(Actions.LOGOUT_REQUEST())

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

      {isUserAuthenticated && (
        <div className='navbar__auth' onClick={handleLogout}>
          <span className='navbar__auth-name'>{userInfo.email}</span>
          <img src={LogoutSvg} />
        </div>
      )}

      {!isUserAuthenticated && (
        <div className='navbar__auth'>
          <Link className='navbar__auth-login' label='Login / Register' to={routesName.LOGIN} />
        </div>
      )}
    </div>
  )
}

export default Navbar
