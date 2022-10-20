let button = document.getElementById('button');
let clear = document.getElementById('clear');

let getValue = () => jsConsole.writeLine(document.querySelector('input').value);

button.addEventListener('click', getValue);               
clear.addEventListener('click', () => jsConsole.clearAll());               