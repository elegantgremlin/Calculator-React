import { isMissingBracket } from './equationHelper'

const validInputs = '0123456789.+-*/()=Cc'

export function isValidInput(key) {
  return (validInputs.indexOf(key) >= 0)
}

export function convertKeyToInput(key) {
  switch(key) {
    case 'Enter':
      return '='
    default:
      return key
  }
}

export function parseInput(input, prevInput, currentText) {
  if (isOperator(input)) {
    return addOperator(input, prevInput, currentText)
  } else if (isNumber(input)) {
    return addNumber(input, prevInput, currentText)
  } else if (isBracket(input)) {
    return addBracket(input, prevInput, currentText)
  } else if (input === 'C' || input === 'c') {
    return '';
  } else {
    return `${currentText}${input}`
  }
}

function isOperator(input) {
  return (input === "+" || input === "-" || input === "*" || input === "/")
}

function isNumber(input) {
   return input.length > 0 && !isNaN(input)
}

function isBracket(input) {
  return isOpenBracket(input) || isCloseBracket(input)
}

function isOpenBracket(input) {
  return (input === '(')
}

function isCloseBracket(input) {
  return (input === ')')
}

function addOperator(input, prevInput, currentText) {
  if (currentText === '') return currentText

  if (isOperator(prevInput)) {
    return replaceLastCharacter(input, currentText)
  } else {
    return `${currentText}${input}`
  }
}

function addNumber(input, prevInput, currentText) {
  if (isCloseBracket(prevInput)) {
    return `${currentText}*${input}`
  } else {
    return `${currentText}${input}`
  }
}

function addBracket(input, prevInput, currentText) {
  if (isOpenBracket(input)) {
    if (isNumber(prevInput)) {
      return `${currentText}*${input}`
    } else if (isCloseBracket(prevInput)) {
      return `${currentText}*${input}`
    }
  } else if (isCloseBracket(input)) {
    if (currentText === '' || !isMissingBracket(currentText)) return currentText

    if (isOperator(prevInput)) {
      return replaceLastCharacter(input, currentText)
    } else if(isOpenBracket(prevInput)) {
      return `${currentText}1${input}`
    }
  }

  return `${currentText}${input}`  
}

function replaceLastCharacter(input, currentText) {
  return `${currentText.substr(0, currentText.length-1)}${input}`
}
