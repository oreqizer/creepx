import compareQuartals from "../utils/compareQuartals";

const creepmove = stream$ =>
  stream$
    .throttleTime(100)
    .map(ev => ({ x: ev.clientX, y: ev.clientY }))
    .bufferCount(3, 1)
    .filter(compareQuartals)
    .map(([at]) => ({ event: "creepmove", data: { x: at.x, y: at.y } }));

export default creepmove;
