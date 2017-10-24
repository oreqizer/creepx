import compareQuartals from "../utils/compareQuartals";

const creepmove = stream$ =>
  stream$
    .throttleTime(50)
    .map(ev => ({ x: ev.clientX, y: ev.clientY }))
    .bufferCount(3, 1)
    .filter(list => list.length === 3 && compareQuartals(list))
    .map(list => ({ x: list[1].x, y: list[1].y })) // takes the middle point
    .bufferTime(2000)
    .filter(list => list.length > 0)
    .map(list => ({ event: "creepmove", data: list }));

export default creepmove;
