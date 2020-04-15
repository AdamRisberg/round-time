# Round Time

A small library of functions for rounding minutes, seconds, and milliseconds by intervals.

- Accepts and returns plain JavaScript Date objects.
- All functions will return a new Date object with the rounding applied.

## Rounding Functions

_Replace "[unit]" with minutes, seconds, or milliseconds._

**[unit]Up:** Rounds up to the nearest multiple of the provided interval.

**[unit]Down:** Rounds down to the nearest multiple of the provided interval.

**[unit]Nearest:** Rounds to the nearest multiple of the provided interval.

_Compete list of functions: minutesUp, minutesDown, minutesNearest, secondsUp, secondsDown, secondsNearest, millisecondsUp, millisecondsDown, millisecondsNearest._

## Arguments

All functions take 2 arguments. A date object and an optional increment number. The following example would round to the nearest 15 minutes: `minutesNearest(new Date(), 15)`
