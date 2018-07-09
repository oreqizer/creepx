import { TestScheduler } from "rxjs/testing";
import test from "tape";

import select from "../select";

const event = {
  target: {
    dataset: {
      creepx: JSON.stringify({ lol: "kek" }),
    },
  },
};

test("select", t => {
  const ts = new TestScheduler((a, e) => t.deepEqual(a, e));

  const iselect = "--e--|";
  const oselect = "--v--|";
  const select$ = ts.createHotObservable(iselect, { e: event });

  ts.expectObservable(select(select$)).toBe(oselect, {
    v: {
      event: "select",
      data: { lol: "kek" },
    },
  });

  ts.flush();
  t.end();
});
