import getRandomNumber from './getRandomNumber.js';

const getProgressionWithOneEmptyElement = () => {
  const arrayLength = getRandomNumber(5, 10);
  const emptyElementNumber = getRandomNumber(0, arrayLength - 1);
  const firstNumber = getRandomNumber(1, 15);
  const elementsDifference = getRandomNumber(1, 5);
  const array = [];
  let i = 0;
  let emptyElement;

  while (i < arrayLength) {
    if (i === emptyElementNumber) {
      emptyElement = firstNumber + i * elementsDifference;
      array.push('..');
    } else {
      array.push(firstNumber + i * elementsDifference);
    }
    i += 1;
  }

  return { emptyElement, array };
};

export default getProgressionWithOneEmptyElement;
