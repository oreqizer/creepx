import R from "ramda";

import extractData from "../utils/extractData";
import mapData from "../utils/mapData";

const isOne = R.compose(R.equals(1), R.length);
const extractor = R.compose(extractData, R.prop("target"), R.head);

function click(stream$) {
  return stream$
    .bufferTime(250)
    .filter(isOne)
    .map(extractor)
    .filter(Boolean)
    .map(json => mapData("click", json));
}

export default click;
