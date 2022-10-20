let formatString = () => {
  let text = document.getElementById('text').value;
  let parameters = document.getElementById('parameters').value.trim().split(' ').map(el => {
    if(+el) return +el;
    if(el === 'true') return true;
    if(el === 'false') return false;
    if(el === 'null') return null;
    if(el === 'undefined') return undefined;
    if(typeof(el) === 'string') return el;
  });     
  
  jsConsole.writeLine(text.replace(/{(\w+)?}/g, () => parameters.shift())); 
}

button.addEventListener('click', formatString);