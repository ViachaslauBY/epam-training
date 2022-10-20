let button = document.getElementById('button');

let removeValue = () => {

  let arr = document.getElementById('arr').value.trim().split(' ');
  let value = document.getElementById('remove').value.trim();

  Array.prototype.removeElement = function (el) {                
          
    for (let i = 0; i < this.length; ++i) {
      if (this[i] === el){            
        this.splice(i--, 1);
      }
    }

    return this;    
  }   

  jsConsole.writeLine(`The array is: [${arr}]`);
  jsConsole.writeLine(`The sorted array is: [${arr.removeElement(value)}]`);     
}

button.addEventListener('click', removeValue);               