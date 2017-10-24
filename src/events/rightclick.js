import extractData from "../utils/extractData";

const click = stream$ =>
  stream$.map(ev => ({
    event: "rightclick",
    data: extractData(ev.target),
  }));

export default click;
