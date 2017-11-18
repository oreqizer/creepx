/* @flow */
/* eslint-disable no-unused-vars */
import creep, {
  creepClicks,
  creepClipboard,
  creepMousemove,
  creepKeydown,
  creepSelect,
  creepWheel,
} from "../";
import type { Event, Subscription } from "../";

const el = document.getElementById("id");

type Data = {|
  text: string,
|};

function cb(payload: Event<Data>) {
  if (payload.type === "click") {
    const { x } = payload.meta;

    // $FlowExpected
    const { z } = payload.meta;

    if (payload.data) {
      const { text } = payload.data;
    }
  }
}

if (el) {
  const sub = creep(el, cb);
  const subtest: Subscription = sub;

  sub.unsubscribe();

  creepClicks(el, cb);
  creepClipboard(el, cb);
  creepMousemove(el, cb);
  creepKeydown(el, cb);
  creepSelect(el, cb);
  creepWheel(el, cb);
}
