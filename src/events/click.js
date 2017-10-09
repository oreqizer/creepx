import extractData from "../utils/extractData";

function click(stream$) {
  return stream$.map(ev => extractData(ev.target)).filter(Boolean);
}

export default click;
