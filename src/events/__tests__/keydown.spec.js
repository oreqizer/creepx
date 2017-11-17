import Rx from "rxjs/Rx";
import test from "tape";

import keydown from "../keydown";

const evs = [
  {
    key: "a",
    target: {
      dataset: {
        creepx: JSON.stringify({ lol: "kek" }),
      },
    },
  },
  {
    key: "b",
    target: {
      dataset: {
        creepx: JSON.stringify({ lol: "kek" }),
      },
    },
  },
  {
    key: "c",
    target: {
      dataset: {
        creepx: JSON.stringify({ lol: "kek" }),
      },
    },
  },
];

test("keydown", t => {
  // TODO marble
  const keydown$ = Rx.Observable
    .interval(100)
    .take(3)
    .map(i => evs[i % 3]);

  keydown(keydown$).subscribe(data => {
    t.deepEqual(data, {
      event: "keydown",
      meta: {
        keys: ["a", "b", "c"],
      },
      data: { lol: "kek" },
    });

    t.end();
  });
});
