module.exports = function() {
  let total = 0;
  let over = 6;
  let wickets = 10;
  let index0 = 0;
  let index1 = 0;
  let index2 = 0;
  let index3 = 0;
  let index4 = 0;
  let index5 = 0;
  let index6 = 0;

  const addScore = str => {
    var score = str.split(",");
    if (score.length === 6) {
      over--;
      for (let x = 0; x < score.length; x++) {
        if (score[x] === "-") {
          index0 += 0;
        } else if (score[x] === "1") {
          index1 += 1;
        } else if (score[x] === "2") {
          index2 += 2;
        } else if (score[x] === "3") {
          index3 += 3;
        } else if (score[x] === "4") {
          index4 += 4;
        } else if (score[x] === "6") {
          index5 += 6;
        } else if (score[x] === "w") {
          wickets--;
        }
      }
    }
  };

  const displayOver = () => {
    return over;
  };

  const displayWickets = () => {
    return wickets;
  };

  const getTotal = () => {
    total = index0 + index1 + index2 + index3 + index4 + index5 + index6;
    return total;
  };

  return {
    addScore,
    displayOver,
    getTotal,
    displayWickets
  };
};
