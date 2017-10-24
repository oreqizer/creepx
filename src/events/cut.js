import extractData from "../utils/extractData";

const cut = stream$ =>
  stream$.map(ev => ({
    event: "cut",
    meta: {
      id: ev.target.id || null,
    },
    data: extractData(ev.target),
  }));

export default cut;
