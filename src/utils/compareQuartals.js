function calcQuartal(fst, snd) {
  const x = fst.x - snd.x;
  const y = fst.y - snd.y;

  if (x >= 0 && y >= 0) {
    return 1;
  }

  if (x < 0 && y >= 0) {
    return 2;
  }

  if (x < 0 && y < 0) {
    return 3;
  }

  return 4;
}

function compareQuartals([fst, snd, trd]) {
  return calcQuartal(fst, snd) !== calcQuartal(snd, trd);
}

export default compareQuartals;
