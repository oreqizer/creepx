import { Observable } from "rxjs/Observable";
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
  const click$ = Observable.fromEvent(target, "click");
  const rightclick$ = Observable.fromEvent(target, "contextmenu");

  return Observable.merge(
    click(click$),
    doubleclick(click$),
    multiclick(click$),
    rightclick(rightclick$),
  ).subscribe(callback);
}

export function creepMousemove(target, callback) {
  const mousemove$ = Observable.fromEvent(target, "mousemove");

  return Observable.merge(creepmove(mousemove$), shakemove(mousemove$)).subscribe(callback);
}

export function creepKeydown(target, callback) {
  const keydown$ = Observable.fromEvent(target, "keydown");

  return Observable.merge(keydown(keydown$)).subscribe(callback);
}

export function creepClipboard(target, callback) {
  const cut$ = Observable.fromEvent(target, "cut");
  const copy$ = Observable.fromEvent(target, "copy");
  const paste$ = Observable.fromEvent(target, "paste");

  return Observable.merge(cut(cut$), copy(copy$), paste(paste$)).subscribe(callback);
}

export function creepWheel(target, callback) {
  const wheel$ = Observable.fromEvent(target, "wheel");

  return Observable.merge(wheel(wheel$)).subscribe(callback);
}

export function creepSelect(target, callback) {
  const select$ = Observable.fromEvent(target, "select");

  return Observable.merge(select(select$)).subscribe(callback);
}

function creep(target, callback) {
  const click$ = Observable.fromEvent(target, "click");
  const rightclick$ = Observable.fromEvent(target, "contextmenu");
  const mousemove$ = Observable.fromEvent(target, "mousemove");
  const keydown$ = Observable.fromEvent(target, "keydown");
  const cut$ = Observable.fromEvent(target, "cut");
  const copy$ = Observable.fromEvent(target, "copy");
  const paste$ = Observable.fromEvent(target, "paste");
  const wheel$ = Observable.fromEvent(target, "wheel");
  const select$ = Observable.fromEvent(target, "select");

  return Observable.merge(
    click(click$),
    doubleclick(click$),
    multiclick(click$),
    rightclick(rightclick$),
    creepmove(mousemove$),
    shakemove(mousemove$),
    keydown(keydown$),
    cut(cut$),
    copy(copy$),
    paste(paste$),
    wheel(wheel$),
    select(select$),
  ).subscribe(callback);
}

export default creep;
