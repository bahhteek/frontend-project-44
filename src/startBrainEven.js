import readlineSync from 'readline-sync';

const startBrainEven = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let successCount = 0;

  while (successCount < 3) {
    const randomNumber = Math.ceil(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    console.log(`Your answer: ${userAnswer}`);

    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    successCount += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default startBrainEven;
