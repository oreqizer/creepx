import extractData from "../utils/extractData";

const doubleclick = stream$ =>
  stream$
    .bufferWhen(() => stream$.delay(350))
    .filter(list => list.length === 2)
    .map(list => ({
      event: "doubleclick",
      meta: {
        x: list[0].clientX,
        y: list[0].clientY,
      },
      data: extractData(list[0].target),
    }));

export default doubleclick;
