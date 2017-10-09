# Creepx

[![Build Status](https://travis-ci.org/oreqizer/creepx.svg?branch=master)](https://travis-ci.org/oreqizer/creepx)
[![codecov](https://codecov.io/gh/oreqizer/creepx/branch/master/graph/badge.svg)](https://codecov.io/gh/oreqizer/creepx)
[![npm](https://img.shields.io/npm/v/creepx.svg)](https://www.npmjs.com/package/creepx)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Declarative user event tracking system. :squirrel:

## What

**Creepx** attaches event listeners to the supplied DOM element, then fires your callback with event payload when various events occur.

To have events registered, you need to put a valid JSON string into the `data-creepx` attribute onto DOM elements you want to track.

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

The following events are currently implemented:

* `click`
* `doubleclick`
* `multiclick`

## Dependencies

* `rxjs` >= 5.4.3
* `ramda` >= 0.24.1

## API

The package exports a default function with two parameters:

* `target` - the DOM element to which should events be attached
* `callback` - the callback to fire when an event happens

#### Example

```js
import creep from 'creepx';

creep(document, payload => {
  fetch('http://localhost:8081/logstash', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
});
```

## License

MIT
