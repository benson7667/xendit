import { bool, object, any } from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import routesName from '../constants/routesName'

const PublicRoute = ({ component, authed, ...rest }) => {
  const Comp = component
  return (
    <Route {...rest} render={(props) => (authed === false ? <Comp {...props} /> : <Redirect to={routesName.HOME} />)} />
  )
}

PublicRoute.propTypes = {
  authed: bool,
  component: any,
  history: object,
  location: object,
}

export default PublicRoute
