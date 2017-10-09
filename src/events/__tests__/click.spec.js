import Rx from "rxjs/Rx";
import test from "tape";

import click from "../click";

const event = {
  target: {
    dataset: {
      creepx: JSON.stringify({ lol: "kek" }),
    },
  },
};

test("click", t => {
  const click$ = Rx.Observable.of(event);

  click(click$).subscribe(data => {
    t.deepEqual(data, {
      event: "click",
      data: { lol: "kek" },
    });
  });

  const multi$ = Rx.Observable
    .interval(50)
    .mapTo(event)
    .take(3);

  click(multi$).subscribe(() => {
    t.fail("multi$ should not be called");
  });

  const clicks$ = Rx.Observable
    .interval(300)
    .mapTo(event)
    .take(2);

  click(clicks$).subscribe(data => {
    t.deepEqual(data, {
      event: "click",
      data: { lol: "kek" },
    });
  });

  t.end();
});
