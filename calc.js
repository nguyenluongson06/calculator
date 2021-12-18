function calculate(e) {
  temp = e.split(' ');
  if ((count(temp[0],'.') > 1) || (count(temp[2],'.') > 1)){
    return 'ERROR'
  };
  num1 = parseFloat(temp[0]);
  num2 = parseFloat(temp[2]);
  operand = temp[1];
  if (operand == '+') {
    return num1 + num2;
  } else if (operand == '-') {
    return num1 - num2;
  } else if (operand == '*') {
    return num1*num2;
  } else if ((operand == '/' && num2 == 0) || !operand) {
    return 'ERROR';
  } else if (operand == '/') {
    return num1/num2;
  }
}

function count(str, find) {
  return (str.split(find)).length - 1;
}

function addNum(e) {
  display.textContent += this.textContent;
};

function addOperand(e) {
  display.textContent += ' ' + this.textContent + ' ';
}; 

const display = document.querySelector('.display');

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', addNum));

const operands = document.querySelectorAll('.operand');
operands.forEach(operand => operand.addEventListener('click', addOperand));

const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
  let ans = calculate(display.textContent);
  
  if (ans == 'ERROR'){
    alert('ERROR');
    display.textContent = '';
  };
  display.textContent = ans.toFixed(3);
});

const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0, -1);
});

const clearAll = document.querySelector('.clearAll');

clearAll.addEventListener('click', () => {
  display.textContent = '';
})