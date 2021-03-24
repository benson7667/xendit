import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Button, Input } from '../../components'
import routesName from '../../constants/routesName'
import './auth.scss'

const Register = () => {
  const [values, setValues] = useState({ email: '', password: '', cPassword: '' })

  const { push } = useHistory()

  const handleOnChange = (field) => (e) => setValues({ ...values, [field]: e.target.value })

  const handleRegister = () => {}

  const goToLogin = () => push(routesName.LOGIN)

  return (
    <>
      <Container style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', marginBottom: '20px' }}>
        <Button onClick={goToLogin} value='Go to Login' />
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
