const multiply = (a, b) => {
  // step 1 - multiply
  let arrForSum = [];

  for(let j = b.length - 1; j >= 0; j--) {
    const bDigit = Number(b[j]);  
    if(isNaN(bDigit)) {
      throw new Error('The input is not valid.');
    }

    let carry = 0;
    let arrayMultiply = [];
    
    const fillZeros = (b.length - 1) - j;

    for(let k = 0; k < fillZeros; k++){
      arrayMultiply.push(0);
    }


    for(let i = a.length - 1; i >= 0; i--) {
      const aDigit = Number(a[i]);
      if(isNaN(aDigit)) {
        throw new Error('The input is not valid.');
      }  
      
      const multiply = aDigit * bDigit + carry;

      const resultDigit = multiply % 10;
      arrayMultiply.push(resultDigit);

      carry = (multiply - resultDigit) / 10;
    }

    if(carry > 0) {
      arrayMultiply.push(carry);
    }

    arrForSum.push(arrayMultiply);
  }

  // step 2 - summ
  let result = [];
  const maxResultNumberLength = a.length + b.length;

  carry = 0;
  for(let j = 0; j < maxResultNumberLength; j++) {
    let sum = 0;

    for(let i = 0; i < arrForSum.length; i++) {
        const digit = arrForSum[i][j] || 0;
  
        sum += digit;
    }
    sum += carry;

    const digit = sum % 10;
    carry = (sum - digit) / 10;

    result.push(digit);
  }

  result = result.reverse().reduce((acc, value) => {
    acc += value.toString();

    return acc;
  }, '');

  result = result.replace(/^0+/, '');

  return result;
}

module.exports = multiply;
