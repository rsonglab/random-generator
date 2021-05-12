const rand = require("./");
const { assert, expect } = require("chai");

describe("RandomInteger() API", function () {
  it("RandomInteger() should within 0 to 100", function () {
    expect(rand.RandomInteger()).to.be.within(0, 100);
  });

  it("RandomInteger(2, 6) should within 2 to 6", function () {
    expect(rand.RandomInteger(2, 6)).to.be.within(2, 6);
  });
});

describe("RandomBoolean() API", function () {
  it("RandomBoolean() should be either true or false", function () {
    expect([true, false]).to.include.members([rand.RandomBoolean()]);
  });
});

describe("RandomRGB() API", function () {
  it("RandomRGB() should have contains substring 'rgb'", function () {
    expect(rand.RandomRGB()).to.have.string("rgb");
  });

  it("RandomRGB() should falls within 12-18", function () {
    expect(rand.RandomRGB()).to.have.lengthOf.within(12, 18);
  });

  it("RandomRGB(true) should falls within 15-23", function () {
    expect(rand.RandomRGB(true)).to.have.lengthOf.within(15, 23);
  });
});

describe("RandomDate() API", function () {
  it("RandomDate() should be a date", function () {
    assert.typeOf(rand.RandomDate(), "date");
  });

  it("RandomDate(now, now) should return now", function () {
    const now = new Date().getTime();
    assert.equal(rand.RandomDate(now, now).getTime(), now);
  });
});

const animals = require("./helper/animals.json");

describe("RandomAnimals() API", function () {
  it("animals expect to include a RandomAnimals()", function () {
    expect(animals).to.include.members([rand.RandomAnimals()]);
  });

  it("the 77th animal should be 'giant-panda'", function () {
    assert.deepStrictEqual(animals[76], "giant-panda");
  });
});
