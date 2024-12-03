const getRandomNumber = (min = 1, max = 100) => {
  if (min > max) {
    throw new Error('Минимальное значение не может быть больше максимального');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomNumber;
