export function getBorderColor(selected, correctness, theme) {
  if (selected) {
    if (!correctness) return theme.palette.primary.main
    else return getColorByCorrectness(correctness, theme)
  } else if (correctness === "correct") return theme.palette.alternative.green
  return theme.palette.alternative.grey
}

export function getOverfillColor(selected, correctness, theme) {

  if (selected) {
    if (!correctness) return theme.palette.primary.main
    else return getColorByCorrectness(correctness, theme)
  }
  return null

}

export function getColorByCorrectness(correctness, theme, userInput) {

  if (correctness === "correct") { return theme.palette.alternative.green }
  else if (correctness === "incorrect") { return theme.palette.alternative.red }
  else if (correctness === "part-correct") { return theme.palette.alternative.yellow }
  else if (userInput) { return theme.palette.common.black }
  return theme.palette.alternative.grey

}

export function getTextLabelByCorrectness(correctness, userInput) {

  if (correctness === "correct") { return 'Правильно' }
  else if (correctness === "incorrect") { return 'Неправильно' }
  else if (correctness === "part-correct") { return 'Частково правильно' }
  else if (userInput) { return 'Збережено' }
  return ''

}

export function getBackgroundColorByCorrectness(correctness, theme) {
  if (correctness === "correct") { return theme.palette.alternative.greenLight }
  else if (correctness === "incorrect") { return theme.palette.alternative.redLight }
  else if (correctness === "part-correct") { return theme.palette.alternative.yellowLight }
  else return theme.palette.alternative.white
}
