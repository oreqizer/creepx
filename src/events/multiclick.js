import extractData from "../utils/extractData";
import mapData from "../utils/mapData";

const multiclick = stream$ =>
  stream$
    .bufferWhen(() => stream$.delay(250))
    .filter(list => list.length >= 3)
    .map(list => mapData("multiclick", extractData(list[0].target)));

export default multiclick;
