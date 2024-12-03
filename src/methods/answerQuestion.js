import readlineSync from 'readline-sync';

const answerQuestion = (question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  console.log(`Your answer: ${userAnswer}`);

  if (userAnswer !== correctAnswer) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    return false;
  }

  return true;
};

export default answerQuestion;
