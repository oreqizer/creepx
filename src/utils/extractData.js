function getData(target) {
  return (target.dataset && target.dataset.creepx) || null;
}

function extractData(target) {
  const data = getData(target);
  if (typeof data === "string") {
    return JSON.parse(data);
  }

  if (target.parentNode) {
    return extractData(target.parentNode);
  }

  return null;
}

export default extractData;
