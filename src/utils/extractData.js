import R from "ramda";

function getData(target) {
  return target.dataset && R.prop("creepx", target.dataset);
}

function extractData(target) {
  const data = getData(target);
  if (R.is(String, data)) {
    return data;
  }

  if (target.parentNode) {
    return extractData(target.parentNode);
  }

  return null;
}

export default extractData;
