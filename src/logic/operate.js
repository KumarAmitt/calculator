import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (!numberOne || !numberTwo || !operation) return '0';

  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  let result;

  switch (operation) {
    case '+':
      result = num1.plus(num2);
      break;
    case '-':
      result = num1.minus(num2);
      break;
    case 'X':
      result = num1.times(num2);
      break;
    case '÷':
      result = num1.div(num2);
      break;
    case '%':
      result = (num1.times(num2)).div(100);
      break;
    default:
      result = 0;
  }

  return result.toString();
};

export default operate;
