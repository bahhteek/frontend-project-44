import readlineSync from 'readline-sync';
import answersWhile from '../index.js';
import getRandomNumber from '../methods/getRandomNumber.js';

const startBrainEven = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  const generateQuestionAndAnswer = () => {
    const question = getRandomNumber(1, 100);
    const answer = question % 2 === 0 ? 'yes' : 'no';
    return { question, answer };
  };

  answersWhile(name, 'Answer "yes" if the number is even, otherwise answer "no".', generateQuestionAndAnswer);
};

export default startBrainEven;
