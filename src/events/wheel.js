// TODO marble test

const wheel = stream$ =>
  stream$.debounceTime(50).map(ev => ({
    event: "wheel",
    meta: {
      x: ev.clientX,
      y: ev.clientY,
      wheelDelta: ev.wheelDelta,
    },
  }));

export default wheel;
