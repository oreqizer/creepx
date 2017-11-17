import Rx from "rxjs/Rx";
import test from "tape";

import creepmove from "../creepmove";

const evs = {
  a: {
    clientX: 13,
    clientY: 37,
  },
  b: {
    clientX: -13,
    clientY: -37,
  },
  c: {
    clientX: 13,
    clientY: -37,
  },
};

test("creepmove", t => {
  const ts = new Rx.TestScheduler((a, e) => t.deepEqual(a, e));

  const imove = "-a--b--c-|";
  const omove = "-------v-|";
  const move$ = ts.createHotObservable(imove, evs);

  ts.expectObservable(creepmove(move$, ts, 20)).toBe(omove, {
    v: {
      event: "creepmove",
      meta: { x: -13, y: -37 },
    },
  });

  ts.flush();
  t.end();
});
