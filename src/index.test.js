import round from "./index";

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

describe("Round milliseconds", () => {
  const millisecondsLow = new Date(2020, 0, 1, 0, 0, 0, 249);
  const millisecondsHigh = new Date(2020, 0, 1, 0, 0, 0, 250);

  it("should round milliseconds up", () => {
    const rounded = round.millisecondsUp(millisecondsLow, 500);
    const target = new Date(2020, 0, 1, 0, 0, 0, 500);

    expect(rounded.getTime()).toBe(target.getTime());
  });

  it("should round milliseconds down", () => {
    const rounded = round.millisecondsDown(millisecondsHigh, 500);
    const target = new Date(2020, 0, 1, 0, 0, 0, 0);

    expect(rounded.getTime()).toBe(target.getTime());
  });

  it("should round milliseconds to nearest", () => {
    const roundedLow = round.millisecondsNearest(millisecondsLow, 500);
    const targetLow = new Date(2020, 0, 1, 0, 0, 0, 0);

    const roundedHigh = round.millisecondsNearest(millisecondsHigh, 500);
    const targetHigh = new Date(2020, 0, 1, 0, 0, 0, 500);

    expect(roundedLow.getTime()).toBe(targetLow.getTime());
    expect(roundedHigh.getTime()).toBe(targetHigh.getTime());
  });
});

describe("validate increment", () => {
  it("should throw error with invalid increment", () => {
    const testDate = new Date();
    const minutesMessage =
      "13 is an invalid rounding increment. Increments of minutes must be a factor of 60.";
    const secondsMessage =
      "13 is an invalid rounding increment. Increments of seconds must be a factor of 60.";
    const millisecondsMessage =
      "13 is an invalid rounding increment. Increments of milliseconds must be a factor of 1000.";

    expect(() => round.minutesNearest(testDate, 13)).toThrow(minutesMessage);
    expect(() => round.secondsNearest(testDate, 13)).toThrow(secondsMessage);
    expect(() => round.millisecondsNearest(testDate, 13)).toThrow(
      millisecondsMessage
    );
  });
});

describe("default increment", () => {
  const secondsTest = new Date(2020, 0, 1, 0, 0, 7, 499);
  const target = new Date(2020, 0, 1, 0, 0, 7);

  it("should use default value of 1 for increment when none is provided", () => {
    const rounded = round.secondsNearest(secondsTest);

    expect(rounded.getTime()).toBe(target.getTime());
  });
});

describe("floating point increments", () => {
  const secondsTest = new Date(2020, 0, 1, 0, 0, 7, 120);
  const target = new Date(2020, 0, 1, 0, 0, 7, 500);

  it("should accept floating point increments", () => {
    const rounded = round.secondsUp(secondsTest, 7.5);

    expect(rounded.getTime()).toBe(target.getTime());
  });
});
