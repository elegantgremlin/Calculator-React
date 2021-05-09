import React from 'react'
import Key from './Key'

const Keypad = (props) => {
  const { keyPress } = props 
  
  return (
    <>
      <Key keyPress={keyPress} label="C" classes="row2 col1 dark" />
      <Key keyPress={keyPress} label="(" classes="row2 col2 dark" />
      <Key keyPress={keyPress} label=")" classes="row2 col3 dark" />
      <Key keyPress={keyPress} label="+" classes="row2 col4 orange" />
      <Key keyPress={keyPress} label="7" classes="row3 col1" />
      <Key keyPress={keyPress} label="8" classes="row3 col2" />
      <Key keyPress={keyPress} label="9" classes="row3 col3" />
      <Key keyPress={keyPress} label="-" classes="row3 col4 orange" />
      <Key keyPress={keyPress} label="4" classes="row4 col1" />
      <Key keyPress={keyPress} label="5" classes="row4 col2" />
      <Key keyPress={keyPress} label="6" classes="row4 col3" />
      <Key keyPress={keyPress} label="*" classes="row4 col4 orange" />
      <Key keyPress={keyPress} label="1" classes="row5 col1" />
      <Key keyPress={keyPress} label="2" classes="row5 col2" />
      <Key keyPress={keyPress} label="3" classes="row5 col3" />
      <Key keyPress={keyPress} label="/" classes="row5 col4 orange" />
      <Key keyPress={keyPress} label="0" classes="row6 col12" />
      <Key keyPress={keyPress} label="." classes="row6 col3" />
      <Key keyPress={keyPress} label="=" classes="row6 col4 orange" />
    </>
  )
}

export default Keypad