let canvas = document.getElementById('canvas');

function drawHouse() {    
  if(canvas.getContext) {
    let ctx = canvas.getContext('2d');     

    //Стены
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 254, 450, 335);

    ctx.fillStyle = '#975b5b';
    ctx.fillRect(22, 256, 446, 331);
    
    //Окна
    ctx.fillStyle = '#000';
    ctx.fillRect(53, 293, 78, 50);
    ctx.fillRect(134, 293, 78, 50);
    ctx.fillRect(53, 347, 78, 50);
    ctx.fillRect(134, 347, 78, 50);

    ctx.fillRect(272, 293, 78, 50);
    ctx.fillRect(353, 293, 78, 50);
    ctx.fillRect(272, 347, 78, 50);
    ctx.fillRect(353, 347, 78, 50);

    ctx.fillRect(272, 436, 78, 50);
    ctx.fillRect(353, 436, 78, 50);
    ctx.fillRect(272, 489, 78, 50);
    ctx.fillRect(353, 489, 78, 50);

    // Крыша
    ctx.beginPath();
    ctx.moveTo(245, 8);
    ctx.lineTo(470, 254);
    ctx.lineTo(20, 254);
    ctx.closePath();
    ctx.fillStyle = '#975b5b';
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;
    ctx.stroke();

    //Труба
    ctx.fillStyle = '#975b5b';
    ctx.fillRect(333, 70, 47, 120);
    
    ctx.beginPath();
    ctx.moveTo(333, 69);    
    ctx.lineTo(333, 191); 
    ctx.strokeStyle = '#000';      
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(382, 69);    
    ctx.lineTo(382, 191); 
    ctx.strokeStyle = '#000';      
    ctx.stroke();
    
    ctx.fillStyle = '#975b5b';
    ctx.beginPath();
    ctx.ellipse(357, 68, 24, 4, Math.PI, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();

    //Дверь
    ctx.beginPath();
    ctx.moveTo(69, 472);    
    ctx.lineTo(69, 591); 
    ctx.strokeStyle = '#000';      
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(133, 441);    
    ctx.lineTo(133, 591); 
    ctx.strokeStyle = '#000';      
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(195, 472);    
    ctx.lineTo(195, 591); 
    ctx.strokeStyle = '#000';      
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(132, 474, 63, 34, Math.PI, 0, Math.PI, false);    
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(115, 543, 7, 0, Math.PI * 2, true);    
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(152, 543, 7, 0, Math.PI * 2, true);    
    ctx.stroke();
  }    
}

drawHouse();