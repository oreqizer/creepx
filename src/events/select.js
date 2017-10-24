import extractData from "../utils/extractData";

const select = stream$ =>
  stream$.map(ev => ({
    event: "select",
    meta: {
      x: ev.clientX,
      y: ev.clientY,
    },
    data: extractData(ev.target),
  }));

export default select;
