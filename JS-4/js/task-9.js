let button = document.getElementById('button');              

let extractEmail = () => {
  let text = document.getElementById('text').value;
  res = text.match(/[a-z0-9_.-]{2,63}@[a-z0-9-]{2,63}\.[a-z0-9]{2,4}/gi);
  res.forEach(el => jsConsole.writeLine(el));            
}

button.addEventListener('click', extractEmail); 