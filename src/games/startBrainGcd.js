import readlineSync from 'readline-sync';
import answersWhile from '../index.js';
import getRandomNumber from '../methods/getRandomNumber.js';
import getGcd from '../methods/getGcd.js';

const startBrainGcd = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  const generateQuestionAndAnswer = () => {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const question = `${num1} ${num2}`;
    const answer = String(getGcd(num1, num2));
    return { question, answer };
  };

  answersWhile(name, 'Find the greatest common divisor of given numbers', generateQuestionAndAnswer);
};

export default startBrainGcd;
