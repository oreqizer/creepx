import "rxjs/add/operator/map";

import extractData from "../utils/extractData";

const paste = stream$ =>
  stream$.map(ev => ({
    event: "paste",
    meta: {
      id: ev.target.id || null,
      text: ev.clipboardData.getData("text/plain"),
    },
    data: extractData(ev.target),
  }));

export default paste;
