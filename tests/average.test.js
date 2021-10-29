const average = require("../utils/for_testing").average;

describe("average", () => {
  test("hala harchio ", () => {
    expect(average([1]).toBe(1));
  });
  test("hala ye chiz dige", () => {
    expect(average([1, 2, 3, 4, 5, 6]).toBe(3.5));
  });
  test("yexch dig eke akhariye ", () => {
    expect(average([]).toBe(0));
  });
});
