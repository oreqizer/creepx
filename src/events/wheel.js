import { async } from "rxjs/scheduler/async";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";

const wheel = (stream$, scheduler = async, delay = 50) =>
  stream$.debounceTime(delay, scheduler).map(ev => ({
    event: "wheel",
    meta: {
      x: ev.clientX,
      y: ev.clientY,
      wheelDelta: ev.wheelDelta,
    },
  }));

export default wheel;
