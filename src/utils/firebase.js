import firebase from 'firebase/app'
import 'firebase/auth'
import config from '../config'

const firebaseApp = firebase.initializeApp(config.firebase)

const fireAuth = firebaseApp.auth()

const userRegister = (email, password) => {
  if (email && password) {
    return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
  }
}

const userLogin = (email, password) => {
  if (email && password) {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password)
  }
}

const userLogout = () => firebaseApp.auth().signOut()

export { fireAuth, userRegister, userLogin, userLogout }
