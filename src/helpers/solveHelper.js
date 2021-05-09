import { isMissingBracket } from "./equationHelper"

export function solve(currentText) {
  currentText = addMissingBrackets(currentText)

  currentText = solveBrackets(currentText)

  return currentText
}

function addMissingBrackets(currentText) {
  while (isMissingBracket(currentText)) {
    currentText = `${currentText})`
  }

  return currentText
}

function solveBrackets(currentText) {
  let brackets = (currentText.match(/\(([0-9.*+-//]*)\)/) || [])

  while (brackets.length > 0) {
    let answer = solveOperators(brackets[1])

    currentText = currentText.replace(brackets[0], answer)

    brackets = (currentText.match(/\(([0-9.*+-//]*)\)/) || [])
  }

  currentText = solveOperators(currentText)

  return currentText
}

function solveOperators(currentText) {
  currentText = solveMultDiv(currentText)
  currentText = solveAddSub(currentText)

  return currentText
}

function solveMultDiv(currentText) {
  let operator = (currentText.match(/([0-9.]+)([/*])([0-9.]+)/) || [])

  while (operator.length > 0) {
    const answer = solveEquation(operator[1], operator[3], operator[2])

    currentText = currentText.replace(operator[0], answer)

    operator = (currentText.match(/([0-9.]+)([/*])([0-9.]+)/) || [])
  }

  return currentText
}

function solveAddSub(currentText) {
  let operator = (currentText.match(/([0-9.]+)([+-])([0-9.]+)/) || [])

  while (operator.length > 0) {
    const answer = solveEquation(operator[1], operator[3], operator[2])

    currentText = currentText.replace(operator[0], answer)

    operator = (currentText.match(/(\d+)([+-])(\d+)/) || [])
  }

  return currentText
}

function solveEquation(firstNum, secondNum, operator) {
  switch(operator) {
    case "+":
      return Number(firstNum) + Number(secondNum)
    case "-":
      return Number(firstNum) - Number(secondNum)
    case "*":
      return Number(firstNum) * Number(secondNum)
    case "/":
      return Number(firstNum) / Number(secondNum)
    default:
      return 0
  }
}