import { async } from "rxjs/scheduler/async";

import extractData from "../utils/extractData";

const click = (stream$, scheduler = async, delay = 350) =>
  stream$
    .bufferWhen(() => stream$.delay(delay, scheduler))
    .filter(list => list.length === 1)
    .map(list => ({
      event: "click",
      meta: {
        x: list[0].clientX,
        y: list[0].clientY,
      },
      data: extractData(list[0].target),
    }));

export default click;
