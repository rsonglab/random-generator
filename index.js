function RandomInteger(min = 0, max = 100) {
  return Math.round(Math.random() * (max - min) + min);
}

function RandomBoolean() {
  // const rand = Math.random() < .5
  const rand = Math.round(Math.random() * 1) === 0;
  return Boolean(rand);
}

function RandomRGB(alpha = false) {
  return `rgb(${RandomInteger(0, 255)}, ${RandomInteger(0, 255)}, ${RandomInteger(0, 255)}
    ${alpha ? `, ${RandomInteger(1, 10) / 10}` : ""})`;
}

module.exports = { RandomInteger, RandomBoolean, RandomRGB };
