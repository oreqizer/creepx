import extractData from "../utils/extractData";
import mapData from "../utils/mapData";

const click = stream$ =>
  stream$
    .bufferWhen(() => stream$.delay(250))
    .filter(list => list.length === 1)
    .map(list => mapData("click", extractData(list[0].target)));

export default click;
