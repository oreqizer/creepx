import Rx from "rxjs/Rx";
import click from "./events/click";
import doubleclick from "./events/doubleclick";
import multiclick from "./events/multiclick";
import rightclick from "./events/rightclick";
import creepmove from "./events/creepmove";
import shakemove from "./events/shakemove";

function creep(target, callback) {
  // https://developer.mozilla.org/en-US/docs/Web/Events
  const click$ = Rx.Observable.fromEvent(target, "click");
  const rightclick$ = Rx.Observable.fromEvent(target, "contextmenu");
  const mousemove$ = Rx.Observable.fromEvent(target, "mousemove");

  Rx.Observable
    .merge(
      click(click$),
      doubleclick(click$),
      multiclick(click$),
      rightclick(rightclick$),
      creepmove(mousemove$),
      shakemove(mousemove$),
    )
    .subscribe(callback);
}

export default creep;
