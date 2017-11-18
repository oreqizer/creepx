import { async } from "rxjs/scheduler/async";

import extractData from "../utils/extractData";

const doubleclick = (stream$, scheduler = async, delay = 350) =>
  stream$
    .bufferWhen(() => stream$.delay(delay, scheduler))
    .filter(list => list.length === 2)
    .map(list => ({
      event: "doubleclick",
      meta: {
        x: list[0].clientX,
        y: list[0].clientY,
      },
      data: extractData(list[0].target),
    }));

export default doubleclick;
