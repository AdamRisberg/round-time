# Round Time

[![npm version](https://img.shields.io/npm/v/round-time.svg?style=flat)](https://npmjs.org/package/round-time "View this project on npm")
[![CircleCI Status](https://circleci.com/gh/AdamRisberg/round-time.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/AdamRisberg/round-time)
[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

A small library of functions for rounding minutes, seconds, and milliseconds by intervals.

- Accepts and returns plain JavaScript Date objects.
- All functions will return a new Date object with the rounding applied.

## Installation

```sh
npm install round-time;
```

## Usage

```Javascript
const round = require("round-time");

const roundedMinutes = round.minutesNearest(new Date(), 10);
```

## Rounding Functions

_Replace "[unit]" with minutes, seconds, or milliseconds._

**[unit]Up:** Rounds up to the nearest multiple of the provided interval.

**[unit]Down:** Rounds down to the nearest multiple of the provided interval.

**[unit]Nearest:** Rounds to the nearest multiple of the provided interval.

_Compete list of functions: minutesUp, minutesDown, minutesNearest, secondsUp, secondsDown, secondsNearest, millisecondsUp, millisecondsDown, millisecondsNearest._

## Arguments

All functions take 2 arguments. A date object and an optional increment number (if no increment is provided, it will use the default value of 1). The following example would round to the nearest 15 minutes: `minutesNearest(new Date(), 15)`

## Time Increments

- Minute and second increments must be factors of 60.
- Millisecond increments must be factors of 1000.
- Minutes and seconds accept decimal increments (2.5, 7.5, etc).
