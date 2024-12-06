import readlineSync from 'readline-sync';
import answersWhile from '../index.js';
import getRandomNumber from '../methods/getRandomNumber.js';
import isPrime from '../methods/isPrime.js';

const startBrainPrime = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  const generateQuestionAndAnswer = () => {
    const question = getRandomNumber(1, 100);
    const answer = isPrime(question) ? 'yes' : 'no';
    return { question, answer };
  };

  answersWhile(name, 'Answer "yes" if given number is prime. Otherwise answer "no".', generateQuestionAndAnswer);
};

export default startBrainPrime;
