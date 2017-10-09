import R from "ramda";

import extractData from "../utils/extractData";
import mapData from "../utils/mapData";

const isMany = R.compose(R.lt(2), R.length);
const extractor = R.compose(extractData, R.prop("target"), R.head);

const multiclick = stream$ =>
  stream$
    .bufferWhen(() => stream$.delay(250))
    .filter(isMany)
    .map(extractor)
    .filter(Boolean)
    .map(json => mapData("multiclick", json));

export default multiclick;
