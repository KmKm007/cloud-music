const MathUtil = {}

MathUtil.calcPercentage = function (value, value2, accuracy = 2) {
  let result = value / value2 * 100
  result = parseFloat(result.toFixed(accuracy))
  return result
}

module.exports = MathUtil
