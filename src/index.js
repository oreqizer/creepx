import Rx from "rxjs/Rx";
import click from "./events/click";
import doubleclick from "./events/doubleclick";
import multiclick from "./events/multiclick";
import creepmove from "./events/creepmove";
import shakemove from "./events/shakemove";

function creep(target, callback) {
  const click$ = Rx.Observable.fromEvent(target, "click");
  const mousemove$ = Rx.Observable.fromEvent(target, "mousemove");

  Rx.Observable
    .merge(
      click(click$),
      doubleclick(click$),
      multiclick(click$),
      creepmove(mousemove$),
      shakemove(mousemove$),
    )
    .subscribe(callback);
}

export default creep;
