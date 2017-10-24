import Rx from "rxjs/Rx";
import test from "tape";

import copy from "../copy";

const event = {};

test("copy", t => {
  const copy$ = Rx.Observable.of(event);

  copy(copy$).subscribe(data => {
    t.deepEqual(data, {
      event: "copy",
    });

    t.end();
  });
});
