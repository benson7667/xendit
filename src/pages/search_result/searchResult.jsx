import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { parseQueryString } from '../../utils/url'
import { Actions } from '../../actions/search'

const SearchResult = (props) => {
  const { location } = props
  const dispatch = useDispatch()

  useEffect(() => {
    const query = parseQueryString(location)
    dispatch(Actions.GET_SEARCH_REQUEST({ ...query }))
  }, [])

  return <div>SearchResult</div>
}

export default SearchResult
