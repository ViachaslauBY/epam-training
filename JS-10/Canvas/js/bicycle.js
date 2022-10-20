let canvas2 = document.getElementById('canvas2');

function drawBicycle() {    
  if(canvas.getContext) {
    let ctx = canvas2.getContext('2d');     

    //Колеса
    ctx.beginPath();
    ctx.arc(117, 249, 92, 0, Math.PI * 2, true);
    ctx.strokeStyle = '#337d8f';
    ctx.lineWidth = 4;       
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(117, 249, 90, 0, Math.PI * 2, true);    
    ctx.fillStyle = '#90cad7';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(466, 249, 92, 0, Math.PI * 2, true);
    ctx.strokeStyle = '#337d8f';
    ctx.lineWidth = 4;       
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(466, 249, 90, 0, Math.PI * 2, true);    
    ctx.fillStyle = '#90cad7';
    ctx.fill();
    
    //Руль
    ctx.beginPath();
    ctx.moveTo(362, 84);
    ctx.lineTo(435, 60); 
    ctx.lineTo(485, 1);        
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(433, 59);
    ctx.lineTo(467, 240);       
    ctx.lineTo(467, 240);     
    ctx.stroke();

    //Рама
    ctx.beginPath();
    ctx.moveTo(111, 244);
    ctx.lineTo(220, 128);
    ctx.lineTo(442, 128); 
    ctx.lineTo(273, 240);
    ctx.closePath();           
    ctx.stroke();
    
    //Сиденье
    ctx.beginPath();
    ctx.moveTo(157, 84);
    ctx.lineTo(236, 84);            
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(196, 84);
    ctx.lineTo(274, 240);            
    ctx.stroke();

    //Педали
    ctx.beginPath();
    ctx.arc(272, 239, 25, 0, Math.PI * 2, true);           
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(236, 200);
    ctx.lineTo(258, 220);            
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(289, 259);
    ctx.lineTo(304, 279);            
    ctx.stroke();
  }    
}

drawBicycle()