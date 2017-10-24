import extractData from "../utils/extractData";

const multiclick = stream$ =>
  stream$
    .bufferWhen(() => stream$.delay(350))
    .filter(list => list.length >= 3)
    .map(list => ({
      event: "multiclick",
      data: extractData(list[0].target),
    }));

export default multiclick;
