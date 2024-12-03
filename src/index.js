import answerQuestion from './methods/answerQuestion.js';

const answersWhile = (name, description, generateQuestionAndAnswer) => {
  console.log(description);

  let successCount = 0;

  while (successCount < 3) {
    const { question, answer } = generateQuestionAndAnswer();
    const answerResult = answerQuestion(question, answer);
    if (!answerResult) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
    successCount += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default answersWhile;
