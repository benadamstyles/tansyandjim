import React from 'react'
import {useUpload} from './upload'

export default function UploadButton() {
  var {error, uploadProgress, upload} = useUpload()

  function submit(event) {
    event.preventDefault()
    upload(event.target.querySelector('input').files)
  }

  return (
    <form method="post" encType="multipart/form-data" onSubmit={submit}>
      <input type="file" accept="image/*" multiple />
      <button type="submit">Upload</button>
      {error && <p>{String(error)}</p>}
      {uploadProgress > 0 && (
        <p>{Math.round(uploadProgress * 100)}% uploaded</p>
      )}
    </form>
  )
}
