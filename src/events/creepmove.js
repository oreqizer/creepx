import { async } from "rxjs/scheduler/async";

import compareQuartals from "../utils/compareQuartals";

const creepmove = (stream$, scheduler = async, delay = 500) =>
  stream$
    .throttleTime(delay, scheduler)
    .map(ev => ({ x: ev.clientX, y: ev.clientY }))
    .bufferCount(3, 1)
    .filter(list => list.length === 3 && compareQuartals(list))
    .map(list => ({
      event: "creepmove",
      meta: { x: list[1].x, y: list[1].y }, // take the middle point
    }));

export default creepmove;
