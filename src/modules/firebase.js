import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: 'AIzaSyAlWGSlrpRs6_J9pDRjwsTw08n62PorAEc',
  authDomain: 'tansy-and-jim.firebaseapp.com',
  databaseURL: 'https://tansy-and-jim.firebaseio.com',
  projectId: 'tansy-and-jim',
  storageBucket: 'tansy-and-jim.appspot.com',
  messagingSenderId: '456539222310',
  appId: '1:456539222310:web:cec105ffae223494',
})

export default firebase
