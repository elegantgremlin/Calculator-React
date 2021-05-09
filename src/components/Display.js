import React from 'react'

const Display = (props) => {
  const { val } = props

  return <input type="text" value={val} readOnly autoFocus />
}

export default Display