import extractData from "../utils/extractData";
import mapData from "../utils/mapData";

const doubleclick = stream$ =>
  stream$
    .bufferWhen(() => stream$.delay(250))
    .filter(list => list.length === 2)
    .map(list => mapData("doubleclick", extractData(list[0].target)));

export default doubleclick;
