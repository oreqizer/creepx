import Observable from "rxjs/Observable";
import click from "./events/click";
import doubleclick from "./events/doubleclick";
import multiclick from "./events/multiclick";

function creep(target, callback) {
  const stream$ = Observable.fromEvent(target, "click");

  Observable.merge(click(stream$), doubleclick(stream$), multiclick(stream$)).subscribe(callback);
}

export default creep;
