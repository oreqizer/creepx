# Creepx

[![Build Status](https://travis-ci.org/oreqizer/creepx.svg?branch=master)](https://travis-ci.org/oreqizer/creepx)
[![codecov](https://codecov.io/gh/oreqizer/creepx/branch/master/graph/badge.svg)](https://codecov.io/gh/oreqizer/creepx)
[![npm](https://img.shields.io/npm/v/creepx.svg)](https://www.npmjs.com/package/creepx)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Declarative user event tracking system. :squirrel:

## TODO

- [ ] Add minimum distance to `creepmove` and `shakemove`
- [ ] Re-evaluate `keydown` behavior
- [ ] Finish docs

## What

**Creepx** attaches event listeners to the supplied DOM element, then fires your callback with event payload when various events occur.

Put a JSON string into the `data-creepx` attribute onto DOM elements you want to track and the data will be attached to your events.

> Note: events that had `stopPropagation` called on them will not be registered.

#### Example

HTML:

```html
<button data-creepx='{"id":"pressbutton"}'>
  Press
</button>
```

JS:

```js
import creep from 'creepx';

creep(document, payload => {
  // do stuff with payload
});
```

When a user clicks on the button, your callback will receive the following payload:

```js
const payload = {
  event: 'click',
  data: {
    id: 'pressbutton',
  },
};
```

You can then send the data to your log server!

### Events

You can import the following functions:

```js
import {
  creepClicks,    // click events
  creepMousemove, // mousemove events
  creepKeydown,   // keydown events
  creepClipboard, // clipboard events
  creepWheel,     // wheel events
  creepSelect,    // select events
} from "creepx";
```

If you just want to track _everything_, import default:

```js
import creep from "creepx"; // yolo
```

#### Click

Located in `creepClicks`.

* `click`
* `doubleclick`
* `multiclick`

#### Mousemove

Located in `creepMousemove`.

* `creepmove`
* `shakemove`

#### Keydown

Located in `creepKeydown`.

* `keydown`

#### Clipboard

Located in `creepClipboard`.

* `cut`
* `copy`
* `paste`

#### Wheel

Located in `creepWheel`.

* `scroll`

#### Select

Located in `creepSelect`.

* `select`

## Dependencies

* `rxjs` >= 5.4.3

## API

The package exports a set of functions as well as a _default_ function with two parameters:

* `target` - the DOM element to which should events be attached
* `callback` - the callback to fire when an event happens

#### Example

```js
import creep, { creepClicks } from 'creepx';

// track everything happening on document if it has 'data-creepx' on it
creep(document, payload => {
  if (payload.data) {
    fetch('http://localhost:8081/logstash', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }
});

// track clicks on this specific button extra
const btn = document.getElementById("trackme")
creepClicks(btn, payload => {
  fetch('http://localhost:8081/trackme', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
})
```

## License

MIT
