import Rx from "rxjs/Rx";
import test from "tape";

import rightclick from "../rightclick";

const event = {
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
      data: { lol: "kek" },
    });

    t.end();
  });
});
