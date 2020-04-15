import {
  TIME_UNITS,
  toMilliseconds,
  validateIncrement,
  floorTo,
  ceilTo,
  roundToNearest,
  round,
} from "./round-time";

describe("toMilliseconds", () => {
  it("should convert minutes to milliseconds", () => {
    const ms = toMilliseconds(2, TIME_UNITS.MINUTES);

    expect(ms).toBe(120000);
  });

  it("should convert seconds to milliseconds", () => {
    const ms = toMilliseconds(2, TIME_UNITS.SECONDS);

    expect(ms).toBe(2000);
  });

  it("should return original number if unit is unknown", () => {
    expect(toMilliseconds(2000, "nothing"));
  });
});

describe("validateIncrement", () => {
  it("should return true on valid increments", () => {
    const validMinutes = validateIncrement(15, TIME_UNITS.MINUTES);
    const validSeconds = validateIncrement(15, TIME_UNITS.SECONDS);
    const validMilliseconds = validateIncrement(100, TIME_UNITS.MILLISECONDS);

    expect(validMinutes).toBe(true);
    expect(validSeconds).toBe(true);
    expect(validMilliseconds).toBe(true);
  });

  it("should return false on invalid increments", () => {
    const validMinutes = validateIncrement(14, TIME_UNITS.MINUTES);
    const validSeconds = validateIncrement(14, TIME_UNITS.SECONDS);
    const validMilliseconds = validateIncrement(13, TIME_UNITS.MILLISECONDS);

    expect(validMinutes).toBe(false);
    expect(validSeconds).toBe(false);
    expect(validMilliseconds).toBe(false);
  });

  it("should throw error on invalid time unit", () => {
    expect(() => validateIncrement(10, "nothing")).toThrow(
      "Invalid unit of time: nothing"
    );
  });
});

describe("floorTo", () => {
  it("should round down to closest increment", () => {
    expect(floorTo(999, 500)).toBe(500);
    expect(floorTo(501, 200)).toBe(400);
  });
});

describe("ceilTo", () => {
  it("should round up to closest increment", () => {
    expect(ceilTo(501, 500)).toBe(1000);
    expect(ceilTo(501, 200)).toBe(600);
  });
});

describe("roundToNearest", () => {
  expect(roundToNearest(50, 100)).toBe(100);
  expect(roundToNearest(49, 100)).toBe(0);
});

describe("round", () => {
  it("should throw error on invalid rounding mode", () => {
    expect(() => round(new Date(), 30, TIME_UNITS.SECONDS, "nothing")).toThrow(
      "Invalid rounding mode: nothing"
    );
  });
});
