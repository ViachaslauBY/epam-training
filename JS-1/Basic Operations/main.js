/*Task1 
  Создайте 3 переменные x = 6, y = 15 и z = 4:
  Выполните и отобразите результат следующих операций для этих переменных:
*/

let x = 6;
let y = 15;
let z = 4;

x += y - x++ * z;
document.getElementById('option1').innerHTML = `Результат: x = ${x}, y = ${y}, z = ${z}`;

z = -- x - y * 5;
document.getElementById('option2').innerHTML = `Результат: x = ${x}, y = ${y}, z = ${z}`;

y /= x + 5 % z;
document.getElementById('option3').innerHTML = `Результат: x = ${x}, y = ${y}, z = ${z}`;

z = x++ + y * 5; 
document.getElementById('option4').innerHTML = `Результат: x = ${x}, y = ${y}, z = ${z}`;

x = y - x++ * z; 
document.getElementById('option5').innerHTML = `Результат: x = ${x}, y = ${y}, z = ${z}`;

/*Task2 
  Вычислите среднее арифметическое трех целочисленных значений и выведите его на экран. 
*/

let buttonCalculate = document.getElementById('buttonCalculate');

buttonCalculate.addEventListener('click' , (event) => {
  event.preventDefault();

  let firstNumber = document.getElementById('firstNumber').value;
  let secondNumber = document.getElementById('secondNumber').value;
  let thirdNumber = document.getElementById('thirdNumber').value;
  let averageNumber = (+firstNumber + +secondNumber + +thirdNumber) / 3;  
  let result = document.getElementById('result').value = averageNumber;  
});


/*Task 3 
Напишите программу расчета объема - V и площади поверхности - S цилиндра.
Объем V цилиндра радиусом - r и высотой – h, вычисляется по формуле: V = πr2h.
Площадь S поверхности цилиндра вычисляется по формуле: S = 2πrh + 2πr2 = 2πr(r + h).
Результаты расчетов выведите на экран.
*/

let buttonCount = document.getElementById('buttonCount');

buttonCount.addEventListener('click' , (event) => {
  event.preventDefault();

  let radiusNumber = document.getElementById('radiusNumber').value;
  let heightNumber = document.getElementById('heightNumber').value;
  
  let volume = Math.PI * Math.pow(radiusNumber, 2) * +heightNumber;
  let volumeValue = document.getElementById('volumeValue').value = volume;

  let square = 2 * Math.PI * +radiusNumber * (+radiusNumber + +heightNumber);
  let squareValue = document.getElementById('squareValue').value = square;
});