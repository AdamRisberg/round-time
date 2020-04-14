const roundTime = require("./round-time");
const { TIME_UNITS } = roundTime;

describe("toMilliseconds", () => {
  it("should convert minutes to milliseconds", () => {
    const ms = roundTime.toMilliseconds(2, TIME_UNITS.MINUTES);

    expect(ms).toBe(120000);
  });

  it("should convert seconds to milliseconds", () => {
    const ms = roundTime.toMilliseconds(2, TIME_UNITS.SECONDS);

    expect(ms).toBe(2000);
  });

  it("should return original number if unit is unknown", () => {
    expect(roundTime.toMilliseconds(2000, "nothing"));
  });
});

describe("validateIncrement", () => {
  it("should return true on valid increments", () => {
    const validMinutes = roundTime.validateIncrement(15, TIME_UNITS.MINUTES);
    const validSeconds = roundTime.validateIncrement(15, TIME_UNITS.SECONDS);
    const validMilliseconds = roundTime.validateIncrement(100, TIME_UNITS.MILLISECONDS);

    expect(validMinutes).toBe(true);
    expect(validSeconds).toBe(true);
    expect(validMilliseconds).toBe(true);
  });

  it("should return false on invalid increments", () => {
    const validMinutes = roundTime.validateIncrement(14, TIME_UNITS.MINUTES);
    const validSeconds = roundTime.validateIncrement(14, TIME_UNITS.SECONDS);
    const validMilliseconds = roundTime.validateIncrement(13, TIME_UNITS.MILLISECONDS);

    expect(validMinutes).toBe(false);
    expect(validSeconds).toBe(false);
    expect(validMilliseconds).toBe(false);
  });

  it("should throw error on invalid time unit", () => {
    expect(() => roundTime.validateIncrement(10, "nothing")).toThrow();
  });
});

describe("floorTo", () => {
  it("should round down to closest increment", () => {
    expect(roundTime.floorTo(999, 500)).toBe(500);
    expect(roundTime.floorTo(501, 200)).toBe(400);
  });
});

describe("ceilTo", () => {
  it("should round up to closest increment", () => {
    expect(roundTime.ceilTo(501, 500)).toBe(1000);
    expect(roundTime.ceilTo(501, 200)).toBe(600);
  });
});

describe("roundToNearest", () => {
  expect(roundTime.roundToNearest(50, 100)).toBe(100);
  expect(roundTime.roundToNearest(49, 100)).toBe(0);
});

describe("round", () => {
  it("should throw error on invalid rounding mode", () => {
    expect(() =>
      roundTime.round(new Date(), 30, TIME_UNITS.SECONDS, "nothing")
    ).toThrow();
  });
});
