import readlineSync from 'readline-sync';

const startBarinGames = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May i have your name? ');

  console.log(`Hello, ${name}!`);
};

export default startBarinGames;
