const round = require("./index");

describe("Round minutes", () => {
  const minutesLow = new Date(2020, 0, 1, 0, 7, 29);
  const minutesHigh = new Date(2020, 0, 1, 0, 7, 30);

  it("should round minutes up", () => {
    const rounded = round.minutesUp(minutesLow, 15);
    const target = new Date(2020, 0, 1, 0, 15);

    expect(rounded.getTime()).toBe(target.getTime());
  });

  it("should round minutes down", () => {
    const rounded = round.minutesDown(minutesHigh, 15);
    const target = new Date(2020, 0, 1, 0, 0);

    expect(rounded.getTime()).toBe(target.getTime());
  });

  it("should round minutes to nearest", () => {
    const roundedLow = round.minutesNearest(minutesLow, 15);
    const targetLow = new Date(2020, 0, 1, 0, 0);

    const roundedHigh = round.minutesNearest(minutesHigh, 15);
    const targetHigh = new Date(2020, 0, 1, 0, 15);

    expect(roundedLow.getTime()).toBe(targetLow.getTime());
    expect(roundedHigh.getTime()).toBe(targetHigh.getTime());
  });
});

describe("Round seconds", () => {
  const secondsLow = new Date(2020, 0, 1, 0, 0, 7, 499);
  const secondsHigh = new Date(2020, 0, 1, 0, 0, 7, 500);

  it("should round seconds up", () => {
    const rounded = round.secondsUp(secondsLow, 15);
    const target = new Date(2020, 0, 1, 0, 0, 15);

    expect(rounded.getTime()).toBe(target.getTime());
  });

  it("should round seconds down", () => {
    const rounded = round.secondsDown(secondsHigh, 15);
    const target = new Date(2020, 0, 1, 0, 0, 0);

    expect(rounded.getTime()).toBe(target.getTime());
  });

  it("should round seconds to nearest", () => {
    const roundedLow = round.secondsNearest(secondsLow, 15);
    const targetLow = new Date(2020, 0, 1, 0, 0, 0);

    const roundedHigh = round.secondsNearest(secondsHigh, 15);
    const targetHigh = new Date(2020, 0, 1, 0, 0, 15);

    expect(roundedLow.getTime()).toBe(targetLow.getTime());
    expect(roundedHigh.getTime()).toBe(targetHigh.getTime());
  });
});

describe("validate increment", () => {
  it("should throw error with invalid increment", () => {
    expect(() => round.minutesNearest(new Date(), 13)).toThrow();
  });
});

describe("default increment", () => {
  const secondsTest = new Date(2020, 0, 1, 0, 0, 7, 499);
  const target = new Date(2020, 0, 1, 0, 0, 7);

  const rounded = round.secondsNearest(secondsTest);

  it("should use default value of 1 for increment when none is provided", () => {
    expect(rounded.getTime()).toBe(target.getTime());
  });
});
