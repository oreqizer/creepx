import Rx from "rxjs/Rx";
import test from "tape";

import paste from "../paste";

const event = {
  clipboardData: {
    getData: () => "kek",
  },
  target: {
    id: "id",
    dataset: {
      creepx: JSON.stringify({ lol: "kek" }),
    },
  },
};

const eventPlain = {
  clipboardData: {
    getData: () => "kek",
  },
  target: {},
};

test("paste", t => {
  const ts = new Rx.TestScheduler((a, e) => t.deepEqual(a, e));

  const ipaste = "--e--|";
  const opaste = "--v--|";
  const paste$ = ts.createHotObservable(ipaste, { e: event });

  ts.expectObservable(paste(paste$)).toBe(opaste, {
    v: {
      event: "paste",
      meta: {
        id: "id",
        text: "kek",
      },
      data: { lol: "kek" },
    },
  });

  const iplain = "--e--|";
  const oplain = "--v--|";
  const plain$ = ts.createHotObservable(iplain, { e: eventPlain });

  ts.expectObservable(paste(plain$)).toBe(oplain, {
    v: {
      event: "paste",
      meta: {
        id: null,
        text: "kek",
      },
      data: null,
    },
  });

  ts.flush();
  t.end();
});
