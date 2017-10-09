import test from "tape";

import mapData from "../mapData";

test("mapData", t => {
  const res = mapData("event", JSON.stringify({ lol: "kek" }));

  t.deepEqual(res, {
    event: "event",
    data: { lol: "kek" },
  });
  t.end();
});
