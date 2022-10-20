let select = document.getElementById('select');
let items10 = document.querySelectorAll('.items10');
let items15 = document.querySelectorAll('.items15');

select.addEventListener('change', function(){  
  let getValue = this.value;  
  
  if (getValue === '5') {
    items10.forEach(function(item) {
      item.classList.add('hidden');
    });     
    
    items15.forEach(function(item) {
      item.classList.add('hidden');
    });
    
  } else if (getValue === '10') {
    items10.forEach(function(item) {
      item.classList.remove('hidden');
    });   
    
    items15.forEach(function(item) {
      item.classList.add('hidden');
    });

  } else if (getValue === '15') {    
    items10.forEach(function(item) {
      item.classList.remove('hidden');
    });

    items15.forEach(function(item) {
      item.classList.remove('hidden');
    });
  }
});

