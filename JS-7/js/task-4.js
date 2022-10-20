let user =  {
  firstName: 'Slava',
  lastName: 'Fedortsov',
  age: 36,
  gender: 'male',  
}

let button = document.getElementById('button');
button.addEventListener('click', () => jsConsole.writeLine(document.getElementById('value').value in user));