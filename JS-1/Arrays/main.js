/* 
Task 1 
Требуется: Создать массив размерностью N элементов, заполнить его произвольными целыми значениями. Вывести наибольшее значение массива, наименьшее значение массива, общую сумму элементов, среднее арифметическое всех элементов, вывести все нечетные значения.
*/
let buttonCalculate = document.getElementById('buttonCalculate');

buttonCalculate.addEventListener('click' , (event) => {
  event.preventDefault();

  let uniformity = document.getElementById('uniformity').value;
  let arr = [];  
  arr.length = +uniformity;
  let max = 100;
  let min = 1;
  let str = '';
  
  
  for ( i = 0; i < arr.length; i++ ) {
    arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;              
  }

  let arrValue = document.getElementById('arrValue').value = `[${arr}]`;
  let maxValue = document.getElementById('maxValue').value = arr.reduce((a, b) => Math.max(a, b))
  let minValue = document.getElementById('minValue').value = arr.reduce((a, b) => Math.min(a, b));
  let sumValue = document.getElementById('sumValue').value = arr.reduce((a, b) => a + b);
  let averageValue = document.getElementById('averageValue').value = sumValue / arr.length; 
  let oddValue = document.getElementById('oddValue').value =  arr.filter(item => item % 2 !== 0);   
});


/* 
Task 2 
Дан вещественный вектор А(n). Найти количество элементов вектора, больших среднего арифметического всех его элементов.
*/
let buttonDeem = document.getElementById('buttonDeem');

buttonDeem.addEventListener('click' , (event) => {
  event.preventDefault();

  let vectorValue = document.getElementById('vectorValue').value;  
  let arrVector = vectorValue.trim().split(' ');
  let sumVector = arrVector.reduce((a, b) => +a + +b);
  let averageVector = sumVector / arrVector.length;
  let countVector = arrVector.filter(el => el > averageVector);
  let countValue = document.getElementById('countValue').value = countVector.length;
});