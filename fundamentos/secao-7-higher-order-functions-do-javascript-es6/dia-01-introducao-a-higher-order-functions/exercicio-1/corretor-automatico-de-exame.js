const corrigirExame = (rightAnswers, studentAnswers, compareAnswers) => {
  return compareAnswers(rightAnswers, studentAnswers);
};

const compareAnswers = (rightAnswers, studentAnswers) => {
  let points = 0;
  for(const index in rightAnswers) {
    if (rightAnswers[index] === studentAnswers[index]) points += 1;
    else if (studentAnswers[index] !== 'N.A') points -= 0.5;
  }
  return points;
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(corrigirExame(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));