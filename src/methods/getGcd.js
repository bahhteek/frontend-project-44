const getGcd = (num1, num2) => {
  const min = num1 > num2 ? num2 : num1;
  for (let i = min; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return null;
};

export default getGcd;
