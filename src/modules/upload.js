import {useState, useEffect, useCallback} from 'react'
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

var updateProgressReducer = (index, progress) => progresses =>
  progresses.map((prev, i) => (i === index ? progress : prev))

export function useUpload() {
  var [uploadProgresses, setUploadProgresses] = useState([0])
  var [error, setError] = useState(null)

  function initProgresses(count) {
    setUploadProgresses(Array(count).fill(0))
  }

  var upload = useCallback(
    function(files) {
      var filesArr = Array.from(files)

      initProgresses(filesArr.length)

      filesArr.map((file, index) =>
        storage
          .child(file.name)
          .put(file, {contentType: file.type})
          .on(firebase.storage.TaskEvent.STATE_CHANGED, {
            next: snapshot =>
              setUploadProgresses(
                updateProgressReducer(
                  index,
                  snapshot.bytesTransferred / snapshot.totalBytes
                )
              ),
            error: err => {
              console.error(err)
              setError(err)
            },
            complete: () => database.add({name: file.name}),
          })
      )
    },
    [setUploadProgresses, setError, storage, database]
  )

  return {
    error,

    uploadProgress:
      uploadProgresses.reduce((total, next) => total + next, 0) /
      uploadProgresses.length,

    upload,
  }
}
