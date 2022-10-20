let button = document.getElementById('button');              

let extractText = () => jsConsole.writeLine(document.getElementById('text').value.replace(/<(.*?)>/g, ''));               

button.addEventListener('click', extractText); 