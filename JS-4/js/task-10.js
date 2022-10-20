let button = document.getElementById('button');              

let isPolindrome = () => {
  let text = document.getElementById('text').value;
  res = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/gi, '').split(' ').filter((word) => word == word.split('').reverse().join(''));
  res.forEach(el => jsConsole.writeLine(el));            
}

button.addEventListener('click', isPolindrome); 