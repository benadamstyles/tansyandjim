import {useState, useEffect} from 'react'
import firebase from './firebase'

var storage = firebase
  .storage()
  .ref()
  .child('gallery')

var database = firebase.firestore().collection('gallery')

export function useRemoteImages() {
  var [imageUrls, setImageUrls] = useState([])

  useEffect(
    () =>
      database.onSnapshot({
        next: querySnapshot => {
          Promise.all(
            querySnapshot.docs
              .map(docSnapshot => docSnapshot.get('name'))
              .map(name => storage.child(name).getDownloadURL())
          ).then(setImageUrls)
        },
      }),
    [setImageUrls]
  )

  return imageUrls
}

export function upload(files) {
  Array.from(files).map(file =>
    storage
      .child(file.name)
      .put(file, {contentType: file.type})
      .then(() => database.add({name: file.name}))
  )
}
