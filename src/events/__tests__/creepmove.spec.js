import Rx from "rxjs/Rx";
import test from "tape";

import creepmove from "../creepmove";

const evs = [
  {
    clientX: 13,
    clientY: 37,
  },
  {
    clientX: -13,
    clientY: -37,
  },
  {
    clientX: 13,
    clientY: -37,
  },
];

test("creepmove", t => {
  const move$ = Rx.Observable
    .interval(550)
    .take(3)
    .map(i => evs[i % 3]);

  creepmove(move$).subscribe(data => {
    t.deepEqual(data, {
      event: "creepmove",
      meta: { x: -13, y: -37 },
    });

    t.end();
  });
});
