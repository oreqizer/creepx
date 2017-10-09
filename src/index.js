import Rx from "rxjs/Rx";
import click from "./events/click";
import doubleclick from "./events/doubleclick";
import multiclick from "./events/multiclick";

function creep(target, callback) {
  const stream$ = Rx.Observable.fromEvent(target, "click");

  Rx.Observable
    .merge(click(stream$), doubleclick(stream$), multiclick(stream$))
    .subscribe(callback);
}

export default creep;
