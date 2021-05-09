import React, { useState } from 'react'
import Display from './components/Display'
import './App.css';
import Keypad from './components/Keypad'
import { parseInput, isValidInput, convertKeyToInput } from './helpers/inputHelper'
import { solve } from './helpers/solveHelper'

const App = () => {
  const [ displayText, setDisplayText ] = useState('')
  const [ prevInput, setPrevInput ] = useState('')

  function keyboardPressed(event) {
    const key = convertKeyToInput(event.key)
    if (isValidInput(key)) {
      keyPressed(key)
    }

    return false
  }

  function keyPressed(key) {
    let disText = ''
    if (key === '=') {
      disText = solve(displayText)
    } else {
      disText = parseInput(key, prevInput, displayText)
    }

    setDisplayText(disText)
    if (disText !== displayText) setPrevInput(key)
  }

  return (
    <div className="App" onKeyPress={keyboardPressed}>
      <Display val={displayText} />
      <Keypad keyPress={keyPressed} />
    </div>
  );
}

export default App;
