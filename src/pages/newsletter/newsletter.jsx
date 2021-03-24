import { useState } from 'react'
import { Button, Container, Input, Navbar } from '../../components'
import './newsletter.scss'

const NewsLetter = () => {
  const [email, setEmail] = useState('')

  const handleOnChange = (e) => {
    setEmail(e.target.value)
  }

  const handleOnClick = () => {}

  return (
    <Container>
      <Navbar />
      <div className='newsletter__container'>
        <h2>Subscribe newsletter</h2>

        <div className='newsletter__info'>
          <Input onChange={handleOnChange} placeholder='Email address' style={{ marginRight: '5px' }} value={email} />
          <Button onClick={handleOnClick} value='Subscribe' />
        </div>
      </div>
    </Container>
  )
}

export default NewsLetter
