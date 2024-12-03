import readlineSync from 'readline-sync';
import answersWhile from '../index.js';
import getProgressionWithOneEmptyElement from '../methods/getProgressionWithOneEmptyElement.js';

const startBrainProgression = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  const generateQuestionAndAnswer = () => {
    const { emptyElement, array } = getProgressionWithOneEmptyElement();
    const question = `${array.join(', ')}`;
    const answer = String(emptyElement);
    return { question, answer };
  };

  answersWhile(name, 'What number is missing in the progression', generateQuestionAndAnswer);
};

export default startBrainProgression;
