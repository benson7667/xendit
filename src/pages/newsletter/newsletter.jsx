import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Alert, Button, Container, Input, Navbar } from '../../components'
import { firestore, getServerTime } from '../../utils/firebase'
import { isValidEmail } from '../../utils/formValidation'
import './newsletter.scss'

const NewsLetter = () => {
  const [email, setEmail] = useState(userEmail ? userEmail : '')
  const [validationErr, setValidationErr] = useState('')
  const [logs, setLogs] = useState([])
  const userEmail = useSelector((state) => state.auth.userInfo.email)

  // TODO: move this to epic middleware and implement under redux
  // to standardize the architecture design
  useEffect(() => {
    firestore()
      .collection('newsletter')
      .orderBy('createdAt', 'desc')
      .limit(10)
      .onSnapshot((snapshots) => {
        const list = []
        snapshots.forEach((snapshot) => {
          list.push({
            id: snapshot.id,
            email: snapshot.data().email,
          })
        })
        setLogs(list)
      })
  }, [])

  const handleOnChange = (e) => setEmail(e.target.value)
  const handleOnClick = (e) => {
    e.preventDefault()

    if (email.trim() === '') {
      return setValidationErr('Email is Required')
    }

    if (!isValidEmail(email)) {
      return setValidationErr('Invalid email formats')
    }

    // TODO: move this to epic middleware and implement under redux
    // to standardize the architecture design
    firestore()
      .collection('newsletter')
      .add({
        email,
        createdAt: getServerTime(),
      })
      .then(() => {
        setValidationErr('')
        setEmail('')
      })
  }

  return (
    <Container>
      <Navbar />
      <form onSubmit={handleOnClick}>
        <div className='newsletter__container'>
          <h2>Subscribe newsletter</h2>
          <p>
            Hmm... Requirement for 3(c) is unclear, would you like me to setup a json server / local backend and store
            the user into users.json when they subscribe to the newsletter? 🤔 🤔 🤔
          </p>
          <p>Instead, I will modify it by log out the last 10 user who have submitted the newsletter</p>
          <div className='newsletter__info'>
            <Input onChange={handleOnChange} placeholder='Email address' style={{ marginRight: '5px' }} value={email} />
            <Button onClick={handleOnClick} value='Subscribe' />
          </div>

          {validationErr && <Alert color='danger' message={validationErr} style={{ marginTop: '5px' }} />}
        </div>
      </form>

      <div className='newsletter__logger'>
        <h4>Latest 10 subscribers</h4>
        {logs.map((log) => (
          <li key={log.id}>{log.email}</li>
        ))}
      </div>
    </Container>
  )
}

export default NewsLetter
