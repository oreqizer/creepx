import Rx from "rxjs/Rx";
import test from "tape";

import doubleclick from "../doubleclick";

const event = {
  clientX: 13,
  clientY: 37,
  target: {
    dataset: {
      creepx: JSON.stringify({ lol: "kek" }),
    },
  },
};

test("doubleclick", t => {
  const ts = new Rx.TestScheduler((a, e) => t.deepEqual(a, e));

  const iclick = "-e---|";
  const oclick = "-----|";
  const click$ = ts.createHotObservable(iclick, { e: event });

  ts.expectObservable(doubleclick(click$, ts, 20)).toBe(oclick);

  const idblclick = "-ee--|";
  const odblclick = "---v-|";
  const dblclick$ = ts.createHotObservable(idblclick, { e: event });

  ts.expectObservable(doubleclick(dblclick$, ts, 20)).toBe(odblclick, {
    v: {
      event: "doubleclick",
      meta: {
        x: 13,
        y: 37,
      },
      data: { lol: "kek" },
    },
  });

  const imulticlick = "-eee----|";
  const omulitclick = "--------|";
  const multiclick$ = ts.createHotObservable(imulticlick, { e: event });

  ts.expectObservable(doubleclick(multiclick$, ts, 40)).toBe(omulitclick);

  ts.flush();
  t.end();
});
