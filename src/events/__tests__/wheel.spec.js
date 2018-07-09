import test from "tape";
import { TestScheduler } from "rxjs/testing";

import wheel from "../wheel";

const event = {
  clientX: 13,
  clientY: 37,
  wheelDelta: 1337,
};

test("wheel", t => {
  const ts = new TestScheduler((a, e) => t.deepEqual(a, e));

  const iwheel = "--e---|";
  const owheel = "----v-|";
  const wheel$ = ts.createHotObservable(iwheel, { e: event });

  ts.expectObservable(wheel(wheel$, ts, 20)).toBe(owheel, {
    v: {
      event: "wheel",
      meta: {
        x: 13,
        y: 37,
        wheelDelta: 1337,
      },
    },
  });

  const idblwheel = "-e-e---|";
  const odblwheel = "-----v-|";
  const dblwheel$ = ts.createHotObservable(idblwheel, { e: event });

  ts.expectObservable(wheel(dblwheel$, ts, 20)).toBe(odblwheel, {
    v: {
      event: "wheel",
      meta: {
        x: 13,
        y: 37,
        wheelDelta: 1337,
      },
    },
  });

  ts.flush();
  t.end();
});
