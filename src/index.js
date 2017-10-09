import Rx from "rxjs/Rx";
import click from "./events/click";

const stream$ = Rx.Observable.fromEvent(document, "click");

const click$ = click(stream$);

click$.subscribe(console.log);
