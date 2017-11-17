import Rx from "rxjs/Rx";
import test from "tape";

import cut from "../cut";

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

test("cut", t => {
  // TODO marble
  const cut$ = Rx.Observable.of(event);

  cut(cut$).subscribe(data => {
    t.deepEqual(data, {
      event: "cut",
      meta: {
        id: "id",
      },
      data: { lol: "kek" },
    });
  });

  const cutPlain$ = Rx.Observable.of(eventPlain);

  cut(cutPlain$).subscribe(data => {
    t.deepEqual(data, {
      event: "cut",
      meta: {
        id: null,
      },
      data: null,
    });
  });

  t.end();
});
