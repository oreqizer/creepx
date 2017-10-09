import test from "tape";

import extractData from "../extractData";

const data = JSON.stringify({ lol: "kek" });
const target = { dataset: { creepx: data } };

test("extractData", t => {
  const flat = extractData(target);
  t.deepEqual(flat, data);

  const deep = extractData({ parentNode: target });
  t.deepEqual(deep, data);

  const none = extractData({ parentNode: null });
  t.equal(none, null);
  t.end();
});
