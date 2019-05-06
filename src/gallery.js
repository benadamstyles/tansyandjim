import React from 'react'
import ReactDOM from 'react-dom'
import DragDrop from './modules/DragDrop'
import UploadButton from './modules/UploadButton'
import {retrieve} from './modules/upload'

function OrText() {
  return <p>Or</p>
}

function UploadContainer() {
  return (
    <section className="upload-container">
      <UploadButton />
      <OrText />
      <DragDrop />
    </section>
  )
}

// Image Gallery
function SeparatorLine() {
  return <hr />
}

function Image() {
  return <img src="" alt="" />
}

function ImagesContainer() {
  var [imageUrls, setImageUrls] = React.useState([])

  retrieve().then(setImageUrls)

  return (
    <section>
      <div className="images-container">
        {imageUrls.map(function(url) {
          return <img key={url} src={url} />
        })}
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <>
      <UploadContainer />
      <SeparatorLine />
      <ImagesContainer />
    </>
  )
}

ReactDOM.render(<Gallery />, document.getElementById('gallery-app'))
