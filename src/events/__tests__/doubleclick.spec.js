import Rx from "rxjs/Rx";
import test from "tape";

import doubleclick from "../doubleclick";

const event = {
  target: {
    dataset: {
      creepx: JSON.stringify({ lol: "kek" }),
    },
  },
};

test("doubleclick", t => {
  const double$ = Rx.Observable
    .interval(50)
    .mapTo(event)
    .take(2);

  doubleclick(double$).subscribe(data => {
    t.deepEqual(data, {
      event: "doubleclick",
      data: { lol: "kek" },
    });

    t.end();
  });

  const multi$ = Rx.Observable
    .interval(50)
    .mapTo(event)
    .take(3);

  doubleclick(multi$).subscribe(() => {
    t.fail("multi$ should not be called");
  });

  const single$ = Rx.Observable.of(event);

  doubleclick(single$).subscribe(() => {
    t.fail("single$ should not be called");
  });
});
