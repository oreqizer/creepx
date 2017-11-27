import "rxjs/add/operator/map";

import extractData from "../utils/extractData";

const keydown = stream$ =>
  stream$.map(ev => ({
    event: "keydown",
    meta: {
      key: ev.key,
    },
    data: extractData(ev.target),
  }));

export default keydown;
