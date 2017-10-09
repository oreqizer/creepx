import Observable from "rxjs/Observable";
import click from "./events/click";
import doubleclick from "./events/doubleclick";
import multiclick from "./events/multiclick";

function subscribe(callback) {
  const stream$ = Observable.fromEvent(document, "click");

  Observable.merge(click(stream$), doubleclick(stream$), multiclick(stream$)).subscribe(callback);
}

export default subscribe;
