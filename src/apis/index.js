import { get } from '../utils/network'

export const searchApi = (data) => {
  const { name } = data
  return get('/search', { params: { name } }).then((res) => res.data)
}
