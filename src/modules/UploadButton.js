import React from 'react'
import {upload} from './upload'

function submit(event) {
  event.preventDefault()
  upload(event.target.querySelector('input').files)
}

export default function UploadButton() {
  return (
    <form method="post" encType="multipart/form-data" onSubmit={submit}>
      <input type="file" accept="image/*" multiple />
      <button type="submit">Upload</button>
    </form>
  )
}
