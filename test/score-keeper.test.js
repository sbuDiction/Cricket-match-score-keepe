const assert = require("assert");
const scoreKeeper = require("../function/score-keeper");
describe("Score keeper Tests", function() {
  it("should be able to take in score ", function() {
    let score = scoreKeeper();

    assert.equal(score.addScore("-"), "");
  });
});
