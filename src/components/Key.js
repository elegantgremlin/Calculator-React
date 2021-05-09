import React from 'react'

const Key = (props) => {
  const { label, classes, keyPress } = props

  return (
    <button onClick={() => keyPress(label)} className={classes}>{label}</button>
  )
}

export default Key