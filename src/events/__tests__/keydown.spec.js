import Rx from "rxjs/Rx";
import test from "tape";

import keydown from "../keydown";

const evs = {
  a: {
    key: "a",
    target: {
      dataset: {
        creepx: JSON.stringify({ lol: "kek" }),
      },
    },
  },
  b: {
    key: "b",
    target: {
      dataset: {
        creepx: JSON.stringify({ lol: "kek" }),
      },
    },
  },
  c: {
    key: "c",
    target: {
      dataset: {
        creepx: JSON.stringify({ lol: "kek" }),
      },
    },
  },
};

test("keydown", t => {
  const ts = new Rx.TestScheduler((a, e) => t.deepEqual(a, e));

  const ikeys = "-a-b-c--|";
  const okeys = "------v-|";
  const keys$ = ts.createHotObservable(ikeys, evs);

  ts.expectObservable(keydown(keys$, ts, 50)).toBe(okeys, {
    v: {
      event: "keydown",
      meta: {
        keys: ["a", "b", "c"],
      },
      data: { lol: "kek" },
    },
  });

  ts.flush();
  t.end();
});
