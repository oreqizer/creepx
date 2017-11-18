import { async } from "rxjs/scheduler/async";

import extractData from "../utils/extractData";

const keydown = (stream$, scheduler = async, delay = 500) =>
  stream$
    .bufferWhen(() => stream$.delay(delay, scheduler))
    .filter(list => list.length > 0)
    .map(list => ({
      event: "keydown",
      meta: {
        keys: list.map(ev => ev.key),
      },
      data: extractData(list[0].target),
    }));

export default keydown;
