import { useHistory } from 'react-router-dom'
import './backButton.scss'

const BackButton = (props) => {
  const { label } = props
  const { goBack } = useHistory()

  return (
    <button className='app__back-button' onClick={() => goBack()}>
      {label}
    </button>
  )
}

export default BackButton
