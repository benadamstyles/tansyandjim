import React from 'react'
import ReactDOM from 'react-dom'
import DragDrop from './modules/DragDrop'
import UploadButton from './modules/UploadButton'
import LoginForm from './modules/LoginForm'
import {useRemoteImages} from './modules/upload'
import {useLogin} from './modules/login'

function OrText() {
  return <h3 className="superscript">Or</h3>
}

function UploadContainer() {
  var [isLoggedIn, login] = useLogin()

  return (
    <section className="upload-container">
      {isLoggedIn ? (
        <>
          <UploadButton />
          <OrText />
          <DragDrop />
        </>
      ) : (
        <LoginForm login={login} />
      )}
    </section>
  )
}

// Image Gallery
function SeparatorLine() {
  return <hr />
}

function Image(props) {
  return <img src={props.src} alt="Wedding Photo" />
}

function ImagesContainer() {
  var imageUrls = useRemoteImages()

  return (
    <section>
      <div className="images-container">
        {imageUrls.map(function(url) {
          return <Image key={url} src={url} />
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
