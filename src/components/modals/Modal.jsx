import React from 'react'

const Modal = (open) => {
    if(!open){return null}
  return (
    <div>{children}</div>
  )
}

export default Modal