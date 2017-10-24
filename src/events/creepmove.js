import compareQuartals from "../utils/compareQuartals";

const creepmove = stream$ =>
  stream$
    .throttleTime(1000)
    .map(ev => ({ x: ev.clientX, y: ev.clientY }))
    .bufferCount(3, 1)
    .filter(list => list.length === 3 && compareQuartals(list))
    .map(list => ({
      event: "creepmove",
      data: { x: list[1].x, y: list[1].y }, // take the middle point
    }));

export default creepmove;
