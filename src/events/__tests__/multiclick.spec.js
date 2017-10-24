import Rx from "rxjs/Rx";
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
  const multi$ = Rx.Observable
    .interval(50)
    .mapTo(event)
    .take(3);

  multiclick(multi$).subscribe(data => {
    t.deepEqual(data, {
      event: "multiclick",
      meta: {
        x: 13,
        y: 37,
      },
      data: { lol: "kek" },
    });

    t.end();
  });

  const double$ = Rx.Observable
    .interval(50)
    .mapTo(event)
    .take(2);

  multiclick(double$).subscribe(() => {
    t.fail("double$ should not be called");
  });
});
