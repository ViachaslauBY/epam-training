let canvas3 = document.getElementById('canvas3');

function drawSnowman() {    
  if(canvas.getContext) {
    let ctx = canvas3.getContext('2d');     
    
    //Лицо
    ctx.beginPath();
    ctx.ellipse(155, 254, 111, 100, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#337d8f';
    ctx.lineWidth = 4;       
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(155, 254, 109, 98, 0, Math.PI * 2, false);    
    ctx.fillStyle = '#90cad7';
    ctx.fill();

    //Шляпа    
    ctx.beginPath();
    ctx.ellipse(147, 166, 124, 22, Math.PI, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;       
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(147, 166, 122, 20, Math.PI, 0, Math.PI * 2, false);          
    ctx.fillStyle = '#3a6693';
    ctx.fill();       

    ctx.fillRect(91, 25, 126, 130);

    ctx.beginPath();
    ctx.ellipse(154, 27, 65, 23, Math.PI, 0, Math.PI * 2, false);          
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(154, 27, 63, 22, Math.PI, 0, Math.PI * 2, false);
    ctx.fillStyle = '#3a6693';
    ctx.fill();
    
    ctx.beginPath();
    ctx.ellipse(154, 147, 65, 22, 0, Math.PI / 26,  Math.PI, false);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;       
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(89, 29);
    ctx.lineTo(89, 151);            
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(219, 29);
    ctx.lineTo(219, 151);            
    ctx.stroke();

    //Рот
    ctx.beginPath();
    ctx.ellipse(130, 307, 44, 15, Math.PI / 22, 0, Math.PI * 2, false);          
    ctx.strokeStyle = '#337d8f';
    ctx.stroke();

    // Глаза
    ctx.beginPath();
    ctx.ellipse(86, 219, 18, 13, Math.PI, 0, Math.PI * 2, false);              
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(173, 219, 18, 13, Math.PI, 0, Math.PI * 2, false);          
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(79, 219, 6, 10, Math.PI, 0, Math.PI * 2, false);
    ctx.fillStyle = '#337d8f';
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(166, 219, 6, 10, Math.PI, 0, Math.PI * 2, false);
    ctx.fillStyle = '#337d8f';
    ctx.fill();

    //Нос
    ctx.beginPath();
    ctx.moveTo(129, 219);
    ctx.lineTo(104, 270);
    ctx.lineTo(130, 270);            
    ctx.stroke();
  }    
}

drawSnowman();