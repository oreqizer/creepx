import extractData from "../utils/extractData";

const doubleclick = stream$ =>
  stream$
    .bufferWhen(() => stream$.delay(250))
    .filter(list => list.length === 2)
    .map(list => ({
      event: "doubleclick",
      data: extractData(list[0].target),
    }));

export default doubleclick;
