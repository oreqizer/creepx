import { TestScheduler } from "rxjs/testing";
import test from "tape";

import rightclick from "../rightclick";

const event = {
  clientX: 13,
  clientY: 37,
  target: {
    dataset: {
      creepx: JSON.stringify({ lol: "kek" }),
    },
  },
};

test("rightclick", t => {
  const ts = new TestScheduler((a, e) => t.deepEqual(a, e));

  const iclick = "--e--|";
  const oclick = "--v--|";
  const click$ = ts.createHotObservable(iclick, { e: event });

  ts.expectObservable(rightclick(click$)).toBe(oclick, {
    v: {
      event: "rightclick",
      meta: {
        x: 13,
        y: 37,
      },
      data: { lol: "kek" },
    },
  });

  ts.flush();
  t.end();
});
