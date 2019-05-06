import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyAlWGSlrpRs6_J9pDRjwsTw08n62PorAEc',
  authDomain: 'tansy-and-jim.firebaseapp.com',
  databaseURL: 'https://tansy-and-jim.firebaseio.com',
  projectId: 'tansy-and-jim',
  storageBucket: 'tansy-and-jim.appspot.com',
  messagingSenderId: '456539222310',
  appId: '1:456539222310:web:cec105ffae223494',
})

var storage = firebase
  .storage()
  .ref()
  .child('gallery')

var gallery = firebase.firestore().collection('gallery')

export function retrieve() {
  return gallery.get().then(function(querySnapshot) {
    return Promise.all(
      querySnapshot.docs
        .map(function(docSnapshot) {
          return docSnapshot.get('name')
        })
        .map(function(name) {
          return storage.child(name).getDownloadURL()
        })
    )
  })
}
export function upload(files) {
  Array.from(files).forEach(function(file) {
    storage.child(file.name).put(file, {contentType: file.type})
  })
}
