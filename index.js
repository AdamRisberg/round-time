const roundDate = require("./round-time");
const { createRoundingFunc, TIME_UNITS, MODE } = roundDate;

module.exports = {
  hoursUp: createRoundingFunc(TIME_UNITS.HOURS, MODE.UP),
  hoursDown: createRoundingFunc(TIME_UNITS.HOURS, MODE.DOWN),
  hoursNearest: createRoundingFunc(TIME_UNITS.HOURS, MODE.NEAREST),
  minutesUp: createRoundingFunc(TIME_UNITS.MINUTES, MODE.UP),
  minutesDown: createRoundingFunc(TIME_UNITS.MINUTES, MODE.DOWN),
  minutesNearest: createRoundingFunc(TIME_UNITS.MINUTES, MODE.NEAREST),
  secondsUp: createRoundingFunc(TIME_UNITS.SECONDS, MODE.UP),
  secondsDown: createRoundingFunc(TIME_UNITS.SECONDS, MODE.DOWN),
  secondsNearest: createRoundingFunc(TIME_UNITS.SECONDS, MODE.NEAREST),
};
