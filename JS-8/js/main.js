let button = document.getElementById('button');
let button2 = document.getElementById('button2');

button.addEventListener('click', () => {
  let divs = document.getElementsByTagName('div');
  console.log(divs);
  for(let el of divs) {
    if(el.children.length){
      let children = el.children;

      for(let child of children){
        child.style.border = '2px solid #fc0203';        
      }      
    }  
  }  
});

button2.addEventListener('click', () => {
  let divs = document.querySelectorAll('div');
  console.log(divs);
  divs.forEach((el) => {
    if(el.children.length){
      let children = el.children;

      for(let child of children){
        child.style.border = '2px solid #008100';        
      }      
    }      
  }); 
});