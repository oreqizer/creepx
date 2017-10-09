import R from "ramda";

import extractData from "../utils/extractData";
import mapData from "../utils/mapData";

const isTwo = R.compose(R.equals(2), R.length);
const extractor = R.compose(extractData, R.prop("target"), R.head);

function doubleclick(stream$) {
  return stream$
    .bufferTime(250)
    .filter(isTwo)
    .map(extractor)
    .filter(Boolean)
    .map(json => mapData("doubleclick", json));
}

export default doubleclick;