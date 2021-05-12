# Random Things Generator

It's a simple random things generator.

## Install

```shell
npm i @ronsong/random-generator
```

## Usage

```js
const { RandomInteger, RandomBoolean, RandomRGB, RandomDate, RandomAnimals } = require("@ronsong/random-generator")

RandomInteger()
// 17

RandomInteger(1, 6)
// 4

RandomBoolean()
// false

RandomRGB()
// rgb(158, 218, 190)

RandomRGB(true)
// rgb(181, 206, 227, 0.3)

RandomDate()
// 2021-02-18T10:53:33.287Z

RandomDate(new Date().getTime(), new Date().getTime())
// 2021-05-12T04:57:07.319Z

RandomAnimals()
// giant-panda

...
```

live demo: [https://runkit.com/embed/z954rwtibfpr](https://runkit.com/embed/z954rwtibfpr)

## APIs

### RandomInteger()

`
@param default min= 0, max = 100
`

Returns a random number.

### RandomBoolean()

Return a random boolean (true/false).

### RandomRGB()

`
@param default alpha = false
`

Return a random color in RGB.

### RandomDate()

`
@param default start = 01/01/1900, end = new Date()
`

Return a random date

### RandomAnimals()

Return a random animal

...

## License

It is an open-source npm package licensed under the "MIT License". Please see the file LICENSE for license terms.
