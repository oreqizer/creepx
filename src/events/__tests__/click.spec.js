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

  const click$ = ts.createHotObservable("--e---|", { e: event });

  ts.expectObservable(click(click$, ts, 20)).toBe("----v-|", {
    v: {
      event: "click",
      meta: {
        x: 13,
        y: 37,
      },
      data: { lol: "kek" },
    },
  });

  const dblclick$ = ts.createHotObservable("-e-e--|", { e: event });

  ts.expectObservable(click(dblclick$, ts, 20)).toBe("------|");

  ts.flush();
  t.end();
});
