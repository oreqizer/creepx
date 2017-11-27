import "rxjs/add/operator/map";

import extractData from "../utils/extractData";

const click = stream$ =>
  stream$.map(ev => ({
    event: "rightclick",
    meta: {
      x: ev.clientX,
      y: ev.clientY,
    },
    data: extractData(ev.target),
  }));

export default click;
