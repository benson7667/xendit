import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import config from '../config'

const firebaseApp = firebase.initializeApp(config.firebase)

const fireAuth = firebaseApp.auth()

// auth
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

// firestore
const firestore = () => firebaseApp.firestore()

const getServerTime = () => firebase.firestore.FieldValue.serverTimestamp()

export { fireAuth, firestore, getServerTime, userRegister, userLogin, userLogout }
