function RandomInteger(min = 0, max = 100) {
  return Math.round(Math.random() * (max - min) + min)
}

function RandomBoolean() {
  // const rand = Math.random() < .5
  const rand = Math.round(Math.random() * 1) === 0
  return Boolean(rand)
}

module.exports = { RandomInteger, RandomBoolean }