const TIME_UNITS = {
  HOURS: "hours",
  MINUTES: "minutes",
  SECONDS: "seconds",
  MILLISECONDS: "milliseconds",
};

const MODE = {
  UP: "up",
  DOWN: "down",
  NEAREST: "nearest",
};

function createRoundingFunc(unit, mode) {
  return function (date, increment = 1) {
    return round(date, increment, unit, mode);
  };
}

function round(date, increment, unit, mode) {
  if (!validateIncrement(increment, unit)) {
    throw new Error("Invalid rounding increment.");
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

function validateIncrement(increment, unit) {
  switch (unit) {
    case TIME_UNITS.MINUTES:
    case TIME_UNITS.SECONDS:
      return 60 % increment === 0;
    case TIME_UNITS.HOURS:
      return 24 % increment === 0;
    default:
      throw new Error(`Invalid time unit: ${unit}`);
  }
}

function floorTo(timeInMs, incrementInMs) {
  return Math.floor(timeInMs / incrementInMs) * incrementInMs;
}

function ceilTo(timeInMs, incrementInMs) {
  return floorTo(timeInMs, incrementInMs) + incrementInMs;
}

function roundToNearest(timeInMs, incrementInMs) {
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

function toMilliseconds(time, unit) {
  switch (unit) {
    case "days":
      return toMilliseconds(time * 24, "hours");
    case "hours":
      return toMilliseconds(time * 60, "minutes");
    case "minutes":
      return toMilliseconds(time * 60, "seconds");
    case "seconds":
      return time * 1000;
    default:
      return time;
  }
}

module.exports = {
  createRoundingFunc,
  round,
  validateIncrement,
  floorTo,
  ceilTo,
  roundToNearest,
  toMilliseconds,
  TIME_UNITS,
  MODE,
};
