import extractData from "../utils/extractData";

const copy = stream$ =>
  stream$.map(ev => ({
    event: "copy",
    meta: {
      id: ev.target.id || null,
    },
    data: extractData(ev.target),
  }));

export default copy;
