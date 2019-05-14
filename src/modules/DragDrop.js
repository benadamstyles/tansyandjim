import React from 'react'
import {upload} from './upload'

export default function DragDrop() {
  var [isHovering, setHoveringStateFunction] = React.useState(false)

  function drag(event) {
    event.preventDefault()
  }

  function drop(event) {
    event.preventDefault()
    setHoveringStateFunction(false)
    upload(event.dataTransfer.files)
  }

  function enter(event) {
    event.preventDefault()
    setHoveringStateFunction(true)
  }

  function leave(event) {
    event.preventDefault()
    setHoveringStateFunction(false)
  }

  var className = 'drop-container ' + (isHovering ? 'drag-hover' : '')

  return (
    <div
      className={className}
      onDragOver={drag}
      onDrop={drop}
      onDragEnter={enter}
      onDragLeave={leave}>
      <p>Drag and drop images to upload</p>
    </div>
  )
}
