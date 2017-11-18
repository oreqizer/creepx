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

function cb(payload: Event) {
  if (payload.type === "click") {
    const { x } = payload.meta;

    // $FlowExpected
    const { z } = payload.meta;
  }
}

if (el) {
  const sub = creep(el, cb);
  const subtest: Subscription = sub;

  sub.unsubscribe();
}
