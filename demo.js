const { RandomInteger, RandomBoolean, RandomRGB, RandomDate } = require("./index")

console.log(RandomInteger())
console.log(RandomInteger(1, 6))
console.log(RandomBoolean())
console.log(RandomRGB())
console.log(RandomRGB(true))
console.log(RandomDate())
console.log(RandomDate(new Date().getTime(), new Date().getTime()))