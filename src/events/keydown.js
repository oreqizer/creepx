import extractData from "../utils/extractData";

const keydown = stream$ =>
  stream$
    .bufferWhen(() => stream$.delay(500))
    .filter(list => list.length > 0)
    .map(list => ({
      event: "keydown",
      meta: {
        keys: list.map(ev => ev.key),
      },
      data: extractData(list[0].target),
    }));

export default keydown;
