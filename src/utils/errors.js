// map firebase authentication error code into desired message
const authErrorMapping = {
  'auth/user-not-found': 'Invalid email or password',
  'auth/wrong-password': 'Invalid email or password',
  'auth/email-already-in-use': 'Email address already in use.',
  'auth/too-many-requests': 'Too many attempt, please try again later',
}

export const getAuthErrMsg = (authError) => {
  if (!authError?.code) return ''
  return authErrorMapping[authError.code] || ''
}
