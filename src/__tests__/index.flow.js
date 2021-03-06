/* @flow */
/* eslint-disable no-unused-vars */
import creep, {
  creepClicks,
  creepClipboard,
  creepMousemove,
  creepKeydown,
  creepSelect,
  creepWheel,
} from "..";
import type { Event, EventClicks, Subscription } from "..";

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

  creepClicks(el, (payload: EventClicks<Data>) => {
    if (payload.data) {
      const str: string = payload.data.text;
    }
  });
}
