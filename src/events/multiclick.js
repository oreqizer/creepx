import async from "rxjs/scheduler/async";

import extractData from "../utils/extractData";

const multiclick = (stream$, scheduler = async, delay = 350) =>
  stream$
    .bufferWhen(() => stream$.delay(delay, scheduler))
    .filter(list => list.length >= 3)
    .map(list => ({
      event: "multiclick",
      meta: {
        x: list[0].clientX,
        y: list[0].clientY,
      },
      data: extractData(list[0].target),
    }));

export default multiclick;
