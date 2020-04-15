import { createRoundingFunc, TIME_UNITS, MODE } from "./round-time";

export default {
  minutesUp: createRoundingFunc(TIME_UNITS.MINUTES, MODE.UP),
  minutesDown: createRoundingFunc(TIME_UNITS.MINUTES, MODE.DOWN),
  minutesNearest: createRoundingFunc(TIME_UNITS.MINUTES, MODE.NEAREST),
  secondsUp: createRoundingFunc(TIME_UNITS.SECONDS, MODE.UP),
  secondsDown: createRoundingFunc(TIME_UNITS.SECONDS, MODE.DOWN),
  secondsNearest: createRoundingFunc(TIME_UNITS.SECONDS, MODE.NEAREST),
  millisecondsUp: createRoundingFunc(TIME_UNITS.MILLISECONDS, MODE.UP),
  millisecondsDown: createRoundingFunc(TIME_UNITS.MILLISECONDS, MODE.DOWN),
  millisecondsNearest: createRoundingFunc(
    TIME_UNITS.MILLISECONDS,
    MODE.NEAREST
  ),
};
