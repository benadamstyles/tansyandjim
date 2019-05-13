import {useState, useEffect} from 'react'
import firebase from './firebase'

var storage = firebase
  .storage()
  .ref()
  .child('gallery')

var database = firebase.firestore().collection('gallery')

function retrieve() {
  return database.get().then(function(querySnapshot) {
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

export function useRemoteImages() {
  var [imageUrls, setImageUrls] = useState([])

  useEffect(() => {
    retrieve().then(function(urls) {
      setImageUrls(urls)
    })
  }, [])

  return imageUrls
}

export function upload(files) {
  Promise.all(
    Array.from(files).map(function(file) {
      return Promise.all([
        storage.child(file.name).put(file, {contentType: file.type}),
        database.add({name: file.name}),
      ])
    })
  ).then(function() {
    window.location.reload()
  })
}
