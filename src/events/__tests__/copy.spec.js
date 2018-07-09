import { TestScheduler } from "rxjs/testing";
import test from "tape";

import copy from "../copy";

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

test("copy", t => {
  const ts = new TestScheduler((a, e) => t.deepEqual(a, e));

  const icopy = "--e--|";
  const ocopy = "--v--|";
  const copy$ = ts.createHotObservable(icopy, { e: event });

  ts.expectObservable(copy(copy$)).toBe(ocopy, {
    v: {
      event: "copy",
      meta: {
        id: "id",
      },
      data: { lol: "kek" },
    },
  });

  const iplain = "--e--|";
  const oplain = "--v--|";
  const plain$ = ts.createHotObservable(iplain, { e: eventPlain });

  ts.expectObservable(copy(plain$)).toBe(oplain, {
    v: {
      event: "copy",
      meta: {
        id: null,
      },
      data: null,
    },
  });

  ts.flush();
  t.end();
});
