import Rx from "rxjs/Rx";
import test from "tape";

import select from "../select";

const event = {
  clientX: 13,
  clientY: 37,
  target: {
    dataset: {
      creepx: JSON.stringify({ lol: "kek" }),
    },
  },
};

test("select", t => {
  const select$ = Rx.Observable.of(event);

  select(select$).subscribe(data => {
    t.deepEqual(data, {
      event: "select",
      meta: {
        x: 13,
        y: 37,
      },
      data: { lol: "kek" },
    });

    t.end();
  });
});
