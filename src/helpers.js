export function getBorderColor(selected, correctness, theme) {
  if (correctness) return getColorByCorrectness(correctness, theme)
  else if (selected) return theme.palette.primary.main
  else return theme.palette.alternative.grey
}

export function getOverfillColor(selected, correctness, theme) {
  if (selected) {
    if (correctness) return getColorByCorrectness(correctness, theme)
    else return theme.palette.alternative.grey
  } else return null

}

export function getColorByCorrectness(correctness, theme) {
  if (correctness === "correct") { return theme.palette.alternative.green }
  else if (correctness === "incorrect") { return theme.palette.alternative.red }
  else if (correctness === "part-correct") { return theme.palette.alternative.yellow }
  else return theme.palette.alternative.grey
}

export function getBackgroundColorByCorrectness(correctness, theme) {
  if (correctness === "correct") { return theme.palette.alternative.greenLight }
  else if (correctness === "incorrect") { return theme.palette.alternative.redLight }
  else if (correctness === "part-correct") { return theme.palette.alternative.yellowLight }
  else return theme.palette.alternative.white
}