import test from "tape";

import compareQuartals from "../compareQuartals";

const no = [
  [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 20, y: 0 }],
  [{ x: 0, y: 0 }, { x: 0, y: 10 }, { x: 0, y: 20 }],
  [{ x: 20, y: 0 }, { x: 10, y: 0 }, { x: 0, y: 0 }],
  [{ x: 0, y: 20 }, { x: 0, y: 10 }, { x: 0, y: 0 }],
  [{ x: 0, y: 0 }, { x: 10, y: 10 }, { x: 20, y: 20 }],
  [{ x: 20, y: 20 }, { x: 10, y: 10 }, { x: 0, y: 0 }],
];

const yes = [
  // 1
  [{ x: 0, y: 0 }, { x: 10, y: 10 }, { x: -20, y: 20 }],
  [{ x: 0, y: 0 }, { x: 10, y: 10 }, { x: -20, y: -20 }],
  [{ x: 0, y: 0 }, { x: 10, y: 10 }, { x: 20, y: -20 }],
  // 2
  [{ x: 0, y: 0 }, { x: -10, y: 10 }, { x: 20, y: 20 }],
  [{ x: 0, y: 0 }, { x: -10, y: 10 }, { x: -20, y: -20 }],
  [{ x: 0, y: 0 }, { x: -10, y: 10 }, { x: 20, y: -20 }],
  // 3
  [{ x: 0, y: 0 }, { x: -10, y: -10 }, { x: 20, y: 20 }],
  [{ x: 0, y: 0 }, { x: -10, y: -10 }, { x: -20, y: 20 }],
  [{ x: 0, y: 0 }, { x: -10, y: -10 }, { x: 20, y: -20 }],
  // 4
  [{ x: 0, y: 0 }, { x: 10, y: -10 }, { x: 20, y: 20 }],
  [{ x: 0, y: 0 }, { x: 10, y: -10 }, { x: -20, y: 20 }],
  [{ x: 0, y: 0 }, { x: 10, y: -10 }, { x: -20, y: -20 }],
];

test("compareQuartals", t => {
  no.forEach(input => {
    t.assert(!compareQuartals(input), "expected 'false'");
  });

  yes.forEach(input => {
    t.assert(compareQuartals(input), "expected 'true'");
  });

  t.end();
});
