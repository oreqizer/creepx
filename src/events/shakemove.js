import { async } from "rxjs/scheduler/async";

import compareQuartals from "../utils/compareQuartals";

const shakemove = (stream$, scheduler = async, delay = 250) =>
  stream$
    .map(ev => ({ x: ev.clientX, y: ev.clientY }))
    .bufferCount(3, 1)
    .filter(list => list.length === 3 && compareQuartals(list))
    .map(list => ({ x: list[1].x, y: list[1].y })) // take the middle point
    .bufferTime(delay, scheduler)
    .filter(list => list.length >= 5)
    .map(list => ({
      event: "shakemove",
      meta: list,
    }));

export default shakemove;
