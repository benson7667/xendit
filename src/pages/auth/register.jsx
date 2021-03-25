import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Container, Button, Input } from '../../components'
import routesName from '../../constants/routesName'
import { Actions } from '../../actions/auth'
import './auth.scss'

const Register = () => {
  const [values, setValues] = useState({ email: '', password: '', cPassword: '' })
  const { push } = useHistory()
  const dispatch = useDispatch()

  const handleOnChange = (field) => (e) => setValues({ ...values, [field]: e.target.value })

  const handleRegister = (e) => {
    e.preventDefault()
    // TODO: validation

    const { email, password } = values
    dispatch(Actions.REGISTER_REQUEST({ email, password }))
  }

  const goToLogin = () => push(routesName.LOGIN)

  return (
    <>
      <Container style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', marginBottom: '20px' }}>
        <Button onClick={goToLogin} value='Go to Login' />
      </Container>

      <div className='auth__container'>
        <div className='auth__wrapper'>
          <form className='auth__form' onSubmit={handleRegister}>
            <Input
              onChange={handleOnChange('email')}
              placeholder='Email address'
              style={{ marginBottom: '10px' }}
              value={values['email']}
            />
            <Input
              onChange={handleOnChange('password')}
              placeholder='Password'
              style={{ marginBottom: '10px' }}
              type='password'
              value={values['password']}
            />
            <Input
              onChange={handleOnChange('cPassword')}
              placeholder='Confirm Password'
              type='password'
              value={values['cPassword']}
            />
            <Button onClick={handleRegister} style={{ width: '100%', marginTop: '20px' }} value='Register' />
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
