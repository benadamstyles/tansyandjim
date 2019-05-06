import React from 'react'
import ReactDOM from 'react-dom'

// Upload
function UploadButton() {
  return <button type="button">Upload</button>
}

function OrText() {
  return <p>Or</p>
}

function DragDrop() {
  return <div className="drop-container" />
}

function UploadContainer() {
  return (
    <div className="upload-container">
      <UploadButton />
      <OrText />
      <DragDrop />
    </div>
  )
}

// Image Gallery
function Image() {
  return <img src="" alt="" />
}

function ImagesContainer() {
  return (
    <div className="images-container">
      <Image />
      <Image />
      <Image />
    </div>
  )
}

function GalleryGrid() {
  return (
    <div className="gallery-grid">
      <ImagesContainer />
    </div>
  )
}

function Gallery() {
  return (
    <>
      <UploadContainer />
      <GalleryGrid />
    </>
  )
}

ReactDOM.render(<Gallery />, document.getElementById('gallery-app'))
