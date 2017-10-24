const cut = stream$ =>
  stream$.map(ev => ({
    event: "paste",
    meta: {
      data: ev.clipboardData.getData("text/plain"),
    },
  }));

export default cut;
