import readlineSync from 'readline-sync';
import answersWhile from '../index.js';
import getRandomNumber from '../methods/getRandomNumber.js';

const startBrainCalc = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  const getMathSign = () => {
    const randomNumber = getRandomNumber(1, 3);
    switch (randomNumber) {
      case 1:
        return '+';
      case 2:
        return '-';
      default:
        return '*';
    }
  };

  const generateQuestionAndAnswer = () => {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const mathSign = getMathSign();
    const question = `${num1} ${mathSign} ${num2}`;
    let answer;
    switch (mathSign) {
      case '+':
        answer = String(num1 + num2);
        break;
      case '-':
        answer = String(num1 - num2);
        break;
      case '*':
        answer = String(num1 * num2);
        break;
      default:
        throw new Error('Неизвестный знак операции');
    }
    return { question, answer };
  };

  answersWhile(name, 'What is the result of the expression', generateQuestionAndAnswer);
};

export default startBrainCalc;
