import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Alert, Container, Button, Input } from '../../components'
import { Actions } from '../../actions/auth'
import routesName from '../../constants/routesName'
import { isValidEmail } from '../../utils/formValidation'
import { getAuthErrMsg } from '../../utils/errors'
import './auth.scss'

const Login = () => {
  const [values, setValues] = useState({ email: '', password: '' })
  const [validationErr, setValidationErr] = useState()

  const { push } = useHistory()
  const dispatch = useDispatch()
  const authErr = useSelector((state) => getAuthErrMsg(state.auth.authError))

  const handleOnChange = (field) => (e) => setValues({ ...values, [field]: e.target.value })

  const handleLogin = (e) => {
    e.preventDefault()

    const isValid = isFormValid()
    if (isValid) {
      const { email, password } = values
      dispatch(Actions.LOGIN_REQUEST({ email, password }))
    }
  }

  const goToRegister = () => push(routesName.REGISTER)

  const isFormValid = () => {
    const { email, password } = values
    let errMessage = ''

    if (!password.trim()) errMessage = 'Password is required'
    if (!isValidEmail(email)) errMessage = 'Invalid email format'
    if (!email) errMessage = 'Email is required'

    // display error message
    setValidationErr(errMessage ? errMessage : '')

    return errMessage === ''
  }

  const renderAlert = () => {
    if (validationErr || authErr) {
      return <Alert color='danger' message={validationErr || authErr} style={{ marginTop: '10px' }} />
    }
    return null
  }

  return (
    <>
      <Container style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', marginBottom: '20px' }}>
        <Button onClick={goToRegister} value='Create Account' />
      </Container>

      <div className='auth__container'>
        <div className='auth__wrapper'>
          <form className='auth__form' onSubmit={handleLogin}>
            <Input
              onChange={handleOnChange('email')}
              placeholder='Email address'
              style={{ marginBottom: '10px' }}
              value={values['email']}
            />
            <Input
              onChange={handleOnChange('password')}
              placeholder='Password'
              type='password'
              value={values['password']}
            />

            {renderAlert()}

            <Button onClick={handleLogin} style={{ width: '100%', marginTop: '20px' }} value='Login' />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
