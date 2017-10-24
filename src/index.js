import Rx from "rxjs/Rx";
import click from "./events/click";
import doubleclick from "./events/doubleclick";
import multiclick from "./events/multiclick";
import rightclick from "./events/rightclick";
import creepmove from "./events/creepmove";
import shakemove from "./events/shakemove";
import wheel from "./events/wheel";

function creep(target, callback) {
  // https://developer.mozilla.org/en-US/docs/Web/Events
  const click$ = Rx.Observable.fromEvent(target, "click");
  const rightclick$ = Rx.Observable.fromEvent(target, "contextmenu");
  const mousemove$ = Rx.Observable.fromEvent(target, "mousemove");
  const wheel$ = Rx.Observable.fromEvent(target, "wheel");

  Rx.Observable
    .merge(
      click(click$),
      doubleclick(click$),
      multiclick(click$),
      rightclick(rightclick$),
      creepmove(mousemove$),
      shakemove(mousemove$),
      wheel(wheel$),
    )
    .subscribe(callback);
}

export default creep;
