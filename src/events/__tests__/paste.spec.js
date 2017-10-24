import Rx from "rxjs/Rx";
import test from "tape";

import paste from "../paste";

const event = {
  clipboardData: {
    getData: () => "kek",
  },
};

test("paste", t => {
  const paste$ = Rx.Observable.of(event);

  paste(paste$).subscribe(data => {
    t.deepEqual(data, {
      event: "paste",
      meta: {
        data: "kek",
      },
    });

    t.end();
  });
});
