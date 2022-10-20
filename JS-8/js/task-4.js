let button = document.getElementById('button');
let button2 = document.getElementById('button2');
let wrapper = document.getElementById('console');

let speed = document.getElementById('speed');
let text = document.getElementById('text');
text.innerHTML = speed.value;
speed.addEventListener('input', () => text.innerHTML = speed.value);

let centerX = 250; 
let centerY = 200; 
let radius = 150;
let angle = 0;

let planets =  [
  './img/mercury.png',
  './img/venus.png',
  './img/earth.png',  
  './img/mars.png',
  './img/jupiter.png',
  './img/saturn.png',
  './img/uranus.png',
  './img/neptune.png',
  
];

let createDivs = () => {
  let quantity = document.getElementById('quantity').value;
  
  for(let i = 0; i < quantity; i++) {
    let img = document.createElement('img');
    img.classList.add('star');
    img.src = planets[i];   
    img.style.left = centerX + radius * Math.cos(2 * Math.PI * i / quantity) + 'px';
    img.style.top = centerY + radius * Math.sin(2 * Math.PI * i / quantity) + 'px';
    wrapper.appendChild(img);    
  }    
};

let moveDivs = () => {
  let images = document.querySelectorAll('#console img');       
  
  for(let i = 0; i < images.length; i++) {    
    images[i].style.left = centerX + radius * Math.cos(angle + 2 * Math.PI * i / images.length) + 'px';
    images[i].style.top = centerY + radius * Math.sin(angle + 2 * Math.PI * i / images.length) + 'px';    
  }

  if(angle == 360) {
    angle = 0;
  }

  angle += 1;
  
  setTimeout(moveDivs, speed.value);    
}

button.addEventListener('click', createDivs, {'once': true});
button2.addEventListener('click', moveDivs, {'once': true});