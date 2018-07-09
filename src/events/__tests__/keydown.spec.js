import { TestScheduler } from "rxjs/testing";
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
};

test("keydown", t => {
  const ts = new TestScheduler((a, e) => t.deepEqual(a, e));

  const ikeys = "-a-|";
  const okeys = "-v-|";
  const keys$ = ts.createHotObservable(ikeys, evs);

  ts.expectObservable(keydown(keys$)).toBe(okeys, {
    v: {
      event: "keydown",
      meta: {
        key: "a",
      },
      data: { lol: "kek" },
    },
  });

  ts.flush();
  t.end();
});
