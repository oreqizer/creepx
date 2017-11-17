import Rx from "rxjs/Rx";
import test from "tape";

import copy from "../copy";

const event = {
  target: {
    id: "id",
    dataset: {
      creepx: JSON.stringify({ lol: "kek" }),
    },
  },
};

const eventPlain = {
  target: {},
};

test("copy", t => {
  // TODO marble
  const copy$ = Rx.Observable.of(event);

  copy(copy$).subscribe(data => {
    t.deepEqual(data, {
      event: "copy",
      meta: {
        id: "id",
      },
      data: { lol: "kek" },
    });
  });

  const copyPlain$ = Rx.Observable.of(eventPlain);

  copy(copyPlain$).subscribe(data => {
    t.deepEqual(data, {
      event: "copy",
      meta: {
        id: null,
      },
      data: null,
    });
  });

  t.end();
});
