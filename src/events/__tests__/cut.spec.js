import Rx from "rxjs/Rx";
import test from "tape";

import cut from "../cut";

const event = {
  target: {
    id: "id",
    dataset: {
      creepx: JSON.stringify({ lol: "kek" }),
    },
  },
};

const eventPlain = {
  target: {},
};

test("cut", t => {
  const ts = new Rx.TestScheduler((a, e) => t.deepEqual(a, e));

  const icut = "--e--|";
  const ocut = "--v--|";
  const cut$ = ts.createHotObservable(icut, { e: event });

  ts.expectObservable(cut(cut$)).toBe(ocut, {
    v: {
      event: "cut",
      meta: {
        id: "id",
      },
      data: { lol: "kek" },
    },
  });

  const iplain = "--e--|";
  const oplain = "--v--|";
  const plain$ = ts.createHotObservable(iplain, { e: eventPlain });

  ts.expectObservable(cut(plain$)).toBe(oplain, {
    v: {
      event: "cut",
      meta: {
        id: null,
      },
      data: null,
    },
  });

  ts.flush();
  t.end();
});
