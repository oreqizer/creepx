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

  return Rx.Observable.merge(
    click(click$),
    doubleclick(click$),
    multiclick(click$),
    rightclick(rightclick$),
  ).subscribe(callback);
}

export function creepMousemove(target, callback) {
  const mousemove$ = Rx.Observable.fromEvent(target, "mousemove");

  return Rx.Observable.merge(creepmove(mousemove$), shakemove(mousemove$)).subscribe(callback);
}

export function creepKeydown(target, callback) {
  const keydown$ = Rx.Observable.fromEvent(target, "keydown");

  return Rx.Observable.merge(keydown(keydown$)).subscribe(callback);
}

export function creepClipboard(target, callback) {
  const cut$ = Rx.Observable.fromEvent(target, "cut");
  const copy$ = Rx.Observable.fromEvent(target, "copy");
  const paste$ = Rx.Observable.fromEvent(target, "paste");

  return Rx.Observable.merge(cut(cut$), copy(copy$), paste(paste$)).subscribe(callback);
}

export function creepWheel(target, callback) {
  const wheel$ = Rx.Observable.fromEvent(target, "wheel");

  return Rx.Observable.merge(wheel(wheel$)).subscribe(callback);
}

export function creepSelect(target, callback) {
  const select$ = Rx.Observable.fromEvent(target, "select");

  return Rx.Observable.merge(select(select$)).subscribe(callback);
}

function creep(target, callback) {
  // https://developer.mozilla.org/en-US/docs/Web/Events
  const subclick = creepClicks(target, callback);
  const submousemove = creepMousemove(target, callback);
  const subkeydown = creepKeydown(target, callback);
  const subclipboard = creepClipboard(target, callback);
  const subwheel = creepWheel(target, callback);
  const subselect = creepSelect(target, callback);

  const unsubscribe = () => {
    subclick.unsubscribe();
    submousemove.unsubscribe();
    subkeydown.unsubscribe();
    subclipboard.unsubscribe();
    subwheel.unsubscribe();
    subselect.unsubscribe();
  };

  return unsubscribe();
}

export default creep;
