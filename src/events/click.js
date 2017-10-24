import extractData from "../utils/extractData";

const click = stream$ =>
  stream$
    .bufferWhen(() => stream$.delay(350))
    .filter(list => list.length === 1)
    .map(list => ({
      event: "click",
      meta: {
        x: list[0].clientX,
        y: list[0].clientY,
      },
      data: extractData(list[0].target),
    }));

export default click;
