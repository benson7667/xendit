import { useState } from 'react'
import './searchBar.scss'
import ArrowRightSvg from '../../assets/icons/arrow-right.svg'

const SearchBar = (props) => {
  const { onSearch } = props
  const [value, setValue] = useState('')

  const handleOnChange = (e) => setValue(e.target.value)
  const handleOnSearch = (e) => {
    e.preventDefault()
    if (value.trim() === '') return
    onSearch(value)
  }

  return (
    <form onSubmit={handleOnSearch}>
      <div className='searchbar__container'>
        <h1 className='searchbar__title'>UNIVERSITY DOMAIN</h1>
        <div className='searchbar__wrapper'>
          <input
            className='searchbar__input'
            onChange={handleOnChange}
            placeholder='Search university...'
            value={value}
          />
          <button className='searchbar__button' onClick={handleOnSearch}>
            <img className='searchbar__button-icon' src={ArrowRightSvg} />
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchBar
