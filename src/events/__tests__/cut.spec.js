import Rx from "rxjs/Rx";
import test from "tape";

import cut from "../cut";

const event = {};

test("cut", t => {
  const cut$ = Rx.Observable.of(event);

  cut(cut$).subscribe(data => {
    t.deepEqual(data, {
      event: "cut",
    });

    t.end();
  });
});
