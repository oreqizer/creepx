import { TestScheduler } from "rxjs/testing";
import test from "tape";

import multiclick from "../multiclick";

const event = {
  clientX: 13,
  clientY: 37,
  target: {
    dataset: {
      creepx: JSON.stringify({ lol: "kek" }),
    },
  },
};

test("multiclick", t => {
  const ts = new TestScheduler((a, e) => t.deepEqual(a, e));

  const imulticlick = "-ee-e--|";
  const omulticlick = "-----v-|";
  const multiclick$ = ts.createHotObservable(imulticlick, { e: event });

  ts.expectObservable(multiclick(multiclick$, ts, 40)).toBe(omulticlick, {
    v: {
      event: "multiclick",
      meta: {
        x: 13,
        y: 37,
      },
      data: { lol: "kek" },
    },
  });

  const idblclick = "-e-e----|";
  const odblclick = "--------|";
  const dblclick$ = ts.createHotObservable(idblclick, { e: event });

  ts.expectObservable(multiclick(dblclick$, ts, 40)).toBe(odblclick);

  ts.flush();
  t.end();
});
