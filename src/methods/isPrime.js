const isPrime = (num) => {
  if (num === 1) return false;

  let dividersCount = 0;
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      dividersCount += 1;
    }
    if (dividersCount > 0) {
      return false;
    }
  }

  if (dividersCount > 1) {
    return false;
  }
  return true;
};

export default isPrime;
