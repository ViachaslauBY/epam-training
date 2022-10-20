/*Task1 
Дано два числа A и B где (A < B).
Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В.
Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.
*/

let buttonCalculate = document.getElementById('buttonCalculate');

buttonCalculate.addEventListener('click' , (event) => {
  event.preventDefault();

  let firstNumber = document.getElementById('firstNumber').value;
  let secondNumber = document.getElementById('secondNumber').value; 
  let result = document.getElementById('result');
  let oddNumbers = document.getElementById('oddNumbers');
  let sum = 0;
  let str = "";

  
  for (let i = +firstNumber; i < +secondNumber; i++) {    
    sum += i;
    result.value = sum;
    if (i % 2 === 1 || i % 2 === -1) {
      str += i + '\n';
      oddNumbers.value = str;
    }
  }       
});

/*
Task 2
Напишите программу, которая будет рассчитывать и выводить на экран количество возможных вариантов доставки товара. Для решения задачи, используйте факториал N!, рассчитываемый с помощью цикла do-while . 
*/

let buttonDeem = document.getElementById('buttonDeem');

buttonDeem.addEventListener('click' , (event) => {
  event.preventDefault();

  let numberShops = document.getElementById('numberShops').value;
  let numberDeliveries = document.getElementById('numberDeliveries');
  let factorial = 1;
  let i = +numberShops;

  do {
    if (i === 0) {
      factorial = 1;
      break;
    }

    factorial *= i;
    
    i = i - 1;    
  } while (i > 0);

  numberDeliveries.value = factorial;     
});