import Rx from "rxjs/Rx";
import test from "tape";

import select from "../select";

const event = {
  target: {
    dataset: {
      creepx: JSON.stringify({ lol: "kek" }),
    },
  },
};

test("select", t => {
  // TODO marble
  const select$ = Rx.Observable.of(event);

  select(select$).subscribe(data => {
    t.deepEqual(data, {
      event: "select",
      data: { lol: "kek" },
    });
  });

  t.end();
});
