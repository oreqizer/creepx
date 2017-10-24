import extractData from "../utils/extractData";

const click = stream$ =>
  stream$
    .bufferWhen(() => stream$.delay(250))
    .filter(list => list.length === 1)
    .map(list => ({
      event: "click",
      data: extractData(list[0].target),
    }));

export default click;
