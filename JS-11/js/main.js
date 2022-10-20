let randomNumber = document.getElementById('randomNumber');
let button = document.getElementById('button');
let block = document.getElementById('block'); 
let modal = document.getElementById('modal'); 
let result = document.getElementById('result'); 

let checkRandomUsed = (array, number) => array.indexOf(number) > -1;

let getCheckRandom = (array) => {
  let random = getRandomNum();

  while(checkRandomUsed(array, random)) {
    random = getRandomNum();
  }

  return random;
}

let getRandomNum = () => Math.floor(Math.random() * 9) + 1;

let generateCode = () => {
  let usedNumbers = [];

  for(let i = 0; i < 4; i++) {
    usedNumbers.push(getCheckRandom(usedNumbers));
  }  
  
  randomNumber.innerText = usedNumbers.join('');
}

generateCode();

let steps = 0;

button.addEventListener('click', () => {  
  let enteredNumber = document.getElementById('number').value.split('').map(num => +num);  
  let generatedNumber = randomNumber.innerText.split('').map(num => +num);
  let text = document.getElementById('text');
  
  takeStep();       

  function checkNumbers(arr1, arr2) { 
    let sheep = 0;
    let ram = 0;

    arr1.forEach((item) => {
      if(arr2.includes(item)) {
        sheep++;
      }      
    }); 

    ram = arr1.reduce((ram, elem, index) => ram += elem == arr2[index], 0);

    if(ram === 4) {      
      // let info = document.getElementById('info');            
      modal.style.display = 'block';
      block.style.display = 'none';
      return `You have ${ram} ram(s) and ${sheep} sheep(s) <br>`;
    } else {
      return `You have ${ram} ram(s) and ${sheep} sheep(s) <br>`;
    }    
  }

  function takeStep() {
    if(enteredNumber.length !== 4) {
      text.innerHTML += `Number must contain four digits <br>`;
    } else if(!Number(enteredNumber.join(''))) {
        text.innerHTML += `Enter the correct number <br>`;
    } else if(enteredNumber[0] === 0) {
        text.innerHTML += `Number can not start with 0 <br>`;
    } else if(hasDuplicates(enteredNumber)){
        text.innerHTML += `Number must contain four diffenent digits <br>`;
    } else {
      steps++;
      text.innerHTML += `${checkNumbers(enteredNumber, generatedNumber)}`;                  
    } 
  }

  function hasDuplicates(arr) {
    return (new Set(arr)).size !== arr.length;
  }
  
  checkNumbers(enteredNumber, generatedNumber);    
});

let submit = document.getElementById('submit');
let username = document.getElementById('username');

submit.addEventListener('click', () => {
  modal.style.display = 'none';
  randomNumber.style.display = 'none';
  result.style.display = 'block';

  localStorage.setItem(username.value, steps.toString());

  for(let i = 0; i < localStorage.length; i++) {
    let row = document.createElement('tr');
    let column2 = document.createElement('td');
    column2.innerHTML = localStorage.key(i);
    let column3 = document.createElement('td');
    column3.innerHTML = localStorage.getItem(localStorage.key(i));
    result.appendChild(row);
    row.appendChild(column2);
    row.appendChild(column3);
  }

  let sorted = Array.from(result.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1);
  result.tBodies[0].append(...sorted); 

  let th = document.createElement('th');
  th.innerHTML = 'Position';
  result.tBodies[0].rows[0].prepend(th);

  let range = 1;
  for (let i = 0; i < sorted.length; i++) {
    let column = document.createElement('td');
    column.innerHTML = range;
    range++;
    sorted[i].prepend(column);
  }  
});

let replay = document.getElementById('replay');
replay.addEventListener('click', () => {
  location.reload();
});