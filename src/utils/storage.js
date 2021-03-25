export const XENDIT_JWT_TOKEN = 'XENDIT_JWT_TOKEN'
export const XENDIT_USER_INFO = 'XENDIT_USER_INFO'

const isLocalStorageAvailable = () => {
  try {
    window.localStorage.setItem('test', 'test')
    window.localStorage.removeItem('test')
    return true
  } catch (err) {
    return false
  }
}

const storage = {
  set: (key, value, saveToCookies = true, durations = 86400000) => {
    if (isLocalStorageAvailable()) {
      window.localStorage.setItem(key, value)
    }

    if (saveToCookies) {
      const date = new Date()
      date.setTime(date.getTime() + durations)
      document.cookie = `${key}=${value};expires=${date.toGMTString()}`
    }
  },

  get: (key, getFromCookies = true) => {
    if (getFromCookies) {
      const regex = new RegExp('(?:(?:^|.*;\\s*)' + key + '\\s*\\=\\s*([^;]*).*$)|^.*$')
      const cookie = document.cookie.replace(regex, '$1')
      return cookie
    }

    if (isLocalStorageAvailable()) {
      return window.localStorage.getItem(key)
    }

    return null
  },

  remove: (key) => {
    if (isLocalStorageAvailable()) {
      window.localStorage.removeItem(key)
    }

    const expiry = '=; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    document.cookie = `${key}${expiry}`
  },
}

export default storage
