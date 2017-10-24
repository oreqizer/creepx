import Rx from "rxjs/Rx";
import test from "tape";

import paste from "../paste";

const event = {
  clipboardData: {
    getData: () => "kek",
  },
  target: {
    id: "id",
    dataset: {
      creepx: JSON.stringify({ lol: "kek" }),
    },
  },
};

const eventPlain = {
  clipboardData: {
    getData: () => "kek",
  },
  target: {},
};

test("paste", t => {
  const paste$ = Rx.Observable.of(event);

  paste(paste$).subscribe(data => {
    t.deepEqual(data, {
      event: "paste",
      meta: {
        id: "id",
        text: "kek",
      },
      data: { lol: "kek" },
    });
  });

  const pastePlain$ = Rx.Observable.of(eventPlain);

  paste(pastePlain$).subscribe(data => {
    t.deepEqual(data, {
      event: "paste",
      meta: {
        id: null,
        text: "kek",
      },
      data: null,
    });
  });

  Rx.Observable.forkJoin(paste$, pastePlain$).subscribe(() => t.end());
});
