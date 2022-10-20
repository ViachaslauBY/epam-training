
  let area = document.getElementById('area');  
  let garbageСan = document.querySelector('.garbage-can');
  let garbageСan2 = document.querySelector('.garbage-can2');

  let amountGarbage = document.getElementById('number').value;   
  let button = document.getElementById('button');  
  let count = document.querySelector('.count');
  let win = document.querySelector('.win');

  let arr = [];
  
  let coordX;
  let coordY;

  let garbage =  [
    './img/garbage1.png',   
    './img/garbage2.png',   
    './img/garbage3.png',   
    './img/garbage4.png',   
    './img/garbage5.png',   
    './img/garbage6.png',   
    './img/garbage7.png',      
    './img/garbage8.png',      
    './img/garbage9.png',      
    './img/garbage10.png',      
  ]; 

  getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;  
  
  let createElems = () => {  
    let amountGarbage = document.getElementById('number').value;       

    for(let i = 0; i < amountGarbage; i++) {
      let key = getRandomInteger(0, garbage.length - 1);      
      
      let img = document.createElement('img');
      img.classList.add('elem');
      img.src = garbage[key];  
      img.style.position = 'absolute';
      img.style.left = getRandomInteger(1, 900) + 'px';
      img.style.top = getRandomInteger(550, 650) + 'px';      
      img.style.cursor = 'pointer';

      area.appendChild(img);    
    }  
    
    let elems = document.querySelectorAll('.elem');
    
    elems.forEach(elem => {
      elem.draggable = true;

      elem.addEventListener('dragstart', event => {
        event.dataTransfer.setData('text/html', 'dragstart');
        elem.style.opacity = 0;
        elem.style.zIndex = 1;
        coordX = event.offsetX;   
        coordY = event.offsetY;                
      });

      garbageСan.addEventListener('dragenter', () => {     
        garbageСan.style.display = 'none';
        garbageСan2.style.display = 'block';        
      });
    
      garbageСan2.addEventListener('dragover', event => {
        event.preventDefault();        
      });
    
      garbageСan2.addEventListener('dragleave', () => {     
        garbageСan.style.display = 'block';
        garbageСan2.style.display = 'none';        
      });         

      elem.addEventListener('dragend', event => {
        let parent = document.elementFromPoint(event.clientX, event.clientY);
        
        elem.style.opacity = 1;                
        elem.style.left = event.pageX - parent.offsetLeft - coordX + 'px'; 
        elem.style.top = event.pageY - parent.offsetTop - coordY + 'px';
        console.log('отпустил');          
        
        event.target.hidden = false; 
        
        if(parent === garbageСan2) {
          event.target.style.opacity = 0;
          arr.push(event.target); 
          count.innerHTML = arr.length;        
        }

        garbageСan.style.display = 'block';
        garbageСan2.style.display = 'none';

        if(arr.length == amountGarbage) {
          win.classList.add('win-active')
        }
      });
    });
  };  

  button.addEventListener('click', createElems);     