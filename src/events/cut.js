const cut = stream$ =>
  stream$.map(() => ({
    event: "cut",
  }));

export default cut;
