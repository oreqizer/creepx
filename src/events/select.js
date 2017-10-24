import extractData from "../utils/extractData";

const select = stream$ =>
  stream$.map(ev => ({
    event: "select",
    data: extractData(ev.target),
  }));

export default select;
