import compareQuartals from "../utils/compareQuartals";

const shakemove = stream$ =>
  stream$
    .throttleTime(50)
    .map(ev => ({ x: ev.clientX, y: ev.clientY }))
    .bufferCount(3, 1)
    .filter(list => list.length === 3 && compareQuartals(list))
    .map(list => ({ x: list[1].x, y: list[1].y })) // take the middle point
    .bufferTime(500)
    .filter(list => list.length >= 4)
    .map(list => ({
      event: "shakemove",
      meta: list,
    }));

export default shakemove;