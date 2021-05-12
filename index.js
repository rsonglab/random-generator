const animals = require("./helper/animals.json")

function RandomInteger(min = 0, max = 100) {
  return Math.round(Math.random() * (max - min) + min);
}

function RandomBoolean() {
  // const rand = Math.random() < .5
  const rand = Math.round(Math.random() * 1) === 0;
  return Boolean(rand);
}

function RandomRGB(alpha = false) {
  return `rgb(${RandomInteger(0, 255)}, ${RandomInteger(0, 255)}, ${RandomInteger(0, 255)}${alpha ? `, ${RandomInteger(1, 10) / 10}` : ""})`;
}

function RandomDate(start = new Date(1900,0,1).getTime(), end = new Date().getTime()) {
  return new Date(RandomInteger(start, end))
}

function RandomAnimals() {
  return animals[RandomInteger(0, animals.length - 1)];
}

module.exports = { RandomInteger, RandomBoolean, RandomRGB, RandomDate, RandomAnimals };
