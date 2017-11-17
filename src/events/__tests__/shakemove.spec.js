import Rx from "rxjs/Rx";
import test from "tape";

import shakemove from "../shakemove";

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

test("shakemove", t => {
  const ts = new Rx.TestScheduler((a, e) => t.deepEqual(a, e));

  const imove = "-abcabcabca--|";
  const omove = "-----------v-|";
  const move$ = ts.createHotObservable(imove, evs);

  ts.expectObservable(shakemove(move$, ts, 110)).toBe(omove, {
    v: {
      event: "shakemove",
      meta: [
        {
          x: -13,
          y: -37,
        },
        {
          x: 13,
          y: -37,
        },
        {
          x: 13,
          y: 37,
        },
        {
          x: -13,
          y: -37,
        },
        {
          x: 13,
          y: -37,
        },
        {
          x: 13,
          y: 37,
        },
        {
          x: -13,
          y: -37,
        },
        {
          x: 13,
          y: -37,
        },
      ],
    },
  });

  const islow = "-a--b--c--a-|";
  const oslow = "------------|";
  const slow$ = ts.createHotObservable(islow, evs);

  ts.expectObservable(shakemove(slow$, ts, 50)).toBe(oslow);

  ts.flush();
  t.end();
});
