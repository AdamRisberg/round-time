export const TIME_UNITS = {
  MINUTES: "minutes",
  SECONDS: "seconds",
  MILLISECONDS: "milliseconds",
};

export const MODE = {
  UP: "up",
  DOWN: "down",
  NEAREST: "nearest",
};

export function createRoundingFunc(unit, mode) {
  return function (date, increment = 1) {
    return round(date, increment, unit, mode);
  };
}

export function round(date, increment, unit, mode) {
  if (!validateIncrement(increment, unit)) {
    throw new Error(getIncrementErrorMessage(unit, increment));
  }

  const timeInMs = date.getTime();
  const incrementInMs = toMilliseconds(increment, unit);

  let roundedTime;

  switch (mode) {
    case MODE.UP:
      roundedTime = ceilTo(timeInMs, incrementInMs);
      break;
    case MODE.DOWN:
      roundedTime = floorTo(timeInMs, incrementInMs);
      break;
    case MODE.NEAREST:
      roundedTime = roundToNearest(timeInMs, incrementInMs);
      break;
    default:
      throw new Error(`Invalid rounding mode: ${mode}`);
  }

  return new Date(roundedTime);
}

export function validateIncrement(increment, unit) {
  switch (unit) {
    case TIME_UNITS.MINUTES:
    case TIME_UNITS.SECONDS:
      return 60 % increment === 0;
    case TIME_UNITS.MILLISECONDS:
      return 1000 % increment === 0;
    default:
      throw new Error(`Invalid unit of time: ${unit}`);
  }
}

export function getIncrementErrorMessage(unit, increment) {
  let targetNum;

  if (unit === TIME_UNITS.MILLISECONDS) {
    targetNum = 1000;
  } else {
    targetNum = 60;
  }

  return `${increment} is an invalid rounding increment. Increments of ${unit} must be a factor of ${targetNum}.`;
}

export function floorTo(timeInMs, incrementInMs) {
  return Math.floor(timeInMs / incrementInMs) * incrementInMs;
}

export function ceilTo(timeInMs, incrementInMs) {
  return floorTo(timeInMs, incrementInMs) + incrementInMs;
}

export function roundToNearest(timeInMs, incrementInMs) {
  const mid = incrementInMs / 2;

  const remainder = timeInMs % incrementInMs;
  let rounded;

  if (remainder < mid) {
    rounded = floorTo(timeInMs, incrementInMs);
  } else {
    rounded = ceilTo(timeInMs, incrementInMs);
  }

  return rounded;
}

export function toMilliseconds(time, unit) {
  switch (unit) {
    case TIME_UNITS.MINUTES:
      return toMilliseconds(time * 60, TIME_UNITS.SECONDS);
    case TIME_UNITS.SECONDS:
      return time * 1000;
    default:
      return time;
  }
}
