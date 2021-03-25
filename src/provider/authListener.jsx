import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Actions } from '../actions/auth'
import { fireAuth } from '../utils/firebase'

const AuthListener = (props) => {
  const { children } = props

  const dispatch = useDispatch()

  useEffect(() => {
    fireAuth.onAuthStateChanged((user) => {
      // user is not logged in
      if (!user) {
        dispatch(Actions.SET_USER({}))
      }
      // user is logged in
      else {
        user.getIdToken().then((token) => {
          const { uid, email, displayName } = user
          dispatch(Actions.SET_USER({ uid, email, displayName, token }))
        })
      }
    })
  }, [])

  return <>{children}</>
}

export default AuthListener
