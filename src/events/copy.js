const cut = stream$ =>
  stream$.map(() => ({
    event: "copy",
  }));

export default cut;
