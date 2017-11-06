import Rx from "rxjs/Rx";
import click from "./events/click";
import doubleclick from "./events/doubleclick";
import multiclick from "./events/multiclick";
import rightclick from "./events/rightclick";
import creepmove from "./events/creepmove";
import shakemove from "./events/shakemove";
import keydown from "./events/keydown";
import cut from "./events/cut";
import copy from "./events/copy";
import paste from "./events/paste";
import wheel from "./events/wheel";
import select from "./events/select";

export function creepClicks(target, callback) {
  const click$ = Rx.Observable.fromEvent(target, "click");
  const rightclick$ = Rx.Observable.fromEvent(target, "contextmenu");

  Rx.Observable
    .merge(click(click$), doubleclick(click$), multiclick(click$), rightclick(rightclick$))
    .subscribe(callback);
}

export function creepMousemove(target, callback) {
  const mousemove$ = Rx.Observable.fromEvent(target, "mousemove");

  Rx.Observable.merge(creepmove(mousemove$), shakemove(mousemove$)).subscribe(callback);
}

export function creepKeydown(target, callback) {
  const keydown$ = Rx.Observable.fromEvent(target, "keydown");

  Rx.Observable.merge(keydown(keydown$)).subscribe(callback);
}

export function creepClipboard(target, callback) {
  const cut$ = Rx.Observable.fromEvent(target, "cut");
  const copy$ = Rx.Observable.fromEvent(target, "copy");
  const paste$ = Rx.Observable.fromEvent(target, "paste");

  Rx.Observable.merge(cut(cut$), copy(copy$), paste(paste$)).subscribe(callback);
}

export function creepWheel(target, callback) {
  const wheel$ = Rx.Observable.fromEvent(target, "wheel");

  Rx.Observable.merge(wheel(wheel$)).subscribe(callback);
}

export function creepSelect(target, callback) {
  const select$ = Rx.Observable.fromEvent(target, "select");

  Rx.Observable.merge(select(select$)).subscribe(callback);
}

function creep(target, callback) {
  // https://developer.mozilla.org/en-US/docs/Web/Events
  creepClicks(target, callback);
  creepMousemove(target, callback);
  creepKeydown(target, callback);
  creepClipboard(target, callback);
  creepWheel(target, callback);
  creepSelect(target, callback);
}

export default creep;
