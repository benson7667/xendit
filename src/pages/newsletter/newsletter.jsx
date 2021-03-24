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
      <form onSubmit={handleOnClick}>
        <div className='newsletter__container'>
          <h2>Subscribe newsletter</h2>
          <p>
            Hmm... Requirement for 3(c) is unclear, would you like me to setup a json server and store the user into
            users.json when they subscribe to the newsletter? 🤔 🤔 🤔
          </p>
          <div className='newsletter__info'>
            <Input onChange={handleOnChange} placeholder='Email address' style={{ marginRight: '5px' }} value={email} />
            <Button onClick={handleOnClick} value='Subscribe' />
          </div>
        </div>
      </form>
    </Container>
  )
}

export default NewsLetter
