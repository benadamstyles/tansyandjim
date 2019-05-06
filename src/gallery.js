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
  var [dragHoverClassName, setDragClassNameFunction] = React.useState(
    'no-drag-hover'
  )

  function drag(event) {
    event.preventDefault()
  }

  function drop(event) {
    event.preventDefault()
    setDragClassNameFunction('no-drag-hover')
    console.log(event.dataTransfer.files)
  }

  function enter(event) {
    event.preventDefault()
    setDragClassNameFunction('drag-hover')
  }

  function leave(event) {
    event.preventDefault()
    setDragClassNameFunction('no-drag-hover')
  }

  return (
    <div
      className={'drop-container ' + dragHoverClassName}
      onDragOver={drag}
      onDrop={drop}
      onDragEnter={enter}
      onDragLeave={leave}>
      <p>Drag and drop image here</p>
    </div>
  )
}

function UploadContainer() {
  return (
    <section>
      <div className="upload-container">
        <UploadButton />
        <OrText />
        <DragDrop />
      </div>
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
  return (
    <section>
      <div className="images-container">
        <Image />
        <Image />
        <Image />
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
