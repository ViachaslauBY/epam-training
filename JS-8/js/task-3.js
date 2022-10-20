let button = document.getElementById('button');
let reset = document.getElementById('reset');

let changeBackgroundColor = () => document.body.style.background = document.getElementById('color').value;   

let resetBackgroundColor = () => document.body.style.background = '#000'; 

button.addEventListener('click', changeBackgroundColor);                
reset.addEventListener('click', resetBackgroundColor);                