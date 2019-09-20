const assert = require("assert");
const scoreKeeper = require("../function/score-keeper");
describe("Score keeper Tests", function() {
  it("should be able to show the total 16 if score was '(1,2,3,4,-,6)' ", function() {
    let score = scoreKeeper();
    score.addScore("1,2,3,4,-,6");
    assert.equal(score.getTotal(), 16);
  });
  it("should be able to take a score in this patern '(1,2,3,4,6,-)' ", function() {
    let score = scoreKeeper();
    score.addScore("1,2,3,4,6,-");
    assert.equal(score.getTotal(), 16);
  });
  it("should be able to show the over left if the first over has been played ", function() {
    let score = scoreKeeper();
    score.addScore("1,2,3,4,6,-");
    assert.equal(score.displayOver(), 5);
  });
  it("should be able to show the over left if 3 games were played ", function() {
    let score = scoreKeeper();
    score.addScore("1,2,3,4,6,-");
    score.addScore("1,2,3,4,6,-");
    score.addScore("1,2,3,4,6,-");
    assert.equal(score.displayOver(), 3);
  });
  it("should be able to show how many wickets left if 3 of them were made ", function() {
    let score = scoreKeeper();
    score.addScore("1,2,3,4,w,-");
    score.addScore("1,2,3,w,6,-");
    score.addScore("1,w,3,4,6,-");
    assert.equal(score.displayWickets(), 7);
  });
});
