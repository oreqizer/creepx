import Rx from "rxjs/Rx";
import test from "tape";

import shakemove from "../shakemove";

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

test("shakemove", t => {
  const move$ = Rx.Observable
    .interval(75)
    .take(8)
    .map(i => evs[i % 3]);

  shakemove(move$).subscribe(data => {
    t.deepEqual(data, {
      event: "shakemove",
      data: [{ x: -13, y: -37 }, { x: 13, y: -37 }, { x: 13, y: 37 }, { x: -13, y: -37 }],
    });

    t.end();
  });

  const slow$ = Rx.Observable
    .interval(300)
    .take(5)
    .map(i => evs[i % 3]);

  shakemove(slow$).subscribe(() => {
    t.fail("slow$ should not get called");
  });
});
