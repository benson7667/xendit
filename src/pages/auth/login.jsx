import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Button, Input } from '../../components'
import routesName from '../../constants/routesName'
import './auth.scss'

const Login = () => {
  const [values, setValues] = useState({ email: '', password: '' })

  const { push } = useHistory()

  const handleOnChange = (field) => (e) => setValues({ ...values, [field]: e.target.value })

  const handleLogin = () => {}

  const goToRegister = () => push(routesName.REGISTER)

  return (
    <>
      <Container style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', marginBottom: '20px' }}>
        <Button onClick={goToRegister} value='Create Account' />
      </Container>

      <div className='auth__container'>
        <div className='auth__wrapper'>
          <div className='login__container'>
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
            <Button onClick={handleLogin} style={{ width: '100%', marginTop: '20px' }} value='Login' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
