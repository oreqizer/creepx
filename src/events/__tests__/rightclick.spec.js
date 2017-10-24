import Rx from "rxjs/Rx";
import test from "tape";

import rightclick from "../rightclick";

const event = {
  clientX: 13,
  clientY: 37,
  target: {
    dataset: {
      creepx: JSON.stringify({ lol: "kek" }),
    },
  },
};

test("rightclick", t => {
  const rightclick$ = Rx.Observable.of(event);

  rightclick(rightclick$).subscribe(data => {
    t.deepEqual(data, {
      event: "rightclick",
      meta: {
        x: 13,
        y: 37,
      },
      data: { lol: "kek" },
    });

    t.end();
  });
});
