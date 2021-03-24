import { Container, Navbar, UniversityCard } from '../../components'
import './style.scss'

const Favourites = () => {
  return (
    <Container>
      <Navbar />

      <div className='container__grid'>
        <UniversityCard country='Singapore' name='Singapore NTU' website='http://www.middlebury.edu/' />
        <UniversityCard
          country='Singapore'
          name='Singapore NTU jjjsd jjjasd jjj uuqweq uuuew'
          website='http://www.middlebury.edu/'
        />
        <UniversityCard country='Singapore' name='Singapore NTU' website='http://www.middlebury.edu/' />
        <UniversityCard country='Singapore' name='Singapore NTU' website='http://www.middlebury.edu/' />
      </div>
    </Container>
  )
}

export default Favourites
