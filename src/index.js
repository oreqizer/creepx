import Rx from "rxjs/Rx";
import click from "./events/click";
import creepmove from "./events/creepmove";
import doubleclick from "./events/doubleclick";
import multiclick from "./events/multiclick";

function creep(target, callback) {
  const click$ = Rx.Observable.fromEvent(target, "click");
  const mousemove$ = Rx.Observable.fromEvent(target, "mousemove");

  Rx.Observable
    .merge(click(click$), creepmove(mousemove$), doubleclick(click$), multiclick(click$))
    .subscribe(callback);
}

export default creep;
