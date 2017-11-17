import Rx from "rxjs/Rx";
import test from "tape";

import click from "../click";

const event = {
  clientX: 13,
  clientY: 37,
  target: {
    dataset: {
      creepx: JSON.stringify({ lol: "kek" }),
    },
  },
};

test("click", t => {
  const ts = new Rx.TestScheduler((a, e) => t.deepEqual(a, e));

  const iclick = "--e---|";
  const oclick = "----v-|";
  const click$ = ts.createHotObservable(iclick, { e: event });

  ts.expectObservable(click(click$, ts, 20)).toBe(oclick, {
    v: {
      event: "click",
      meta: {
        x: 13,
        y: 37,
      },
      data: { lol: "kek" },
    },
  });

  const idblclick = "-e-e--|";
  const odblclick = "------|";
  const dblclick$ = ts.createHotObservable(idblclick, { e: event });

  ts.expectObservable(click(dblclick$, ts, 20)).toBe(odblclick);

  ts.flush();
  t.end();
});
