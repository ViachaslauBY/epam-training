let btnGetRequest = document.getElementById('getRequest');
let btnPostRequest = document.getElementById('postRequest');
let table = document.getElementById('table');
let table2 = document.getElementById('table2');
let formElem = document.getElementById('formElem');

btnGetRequest.addEventListener('click', async () => {
  formElem.style.display = 'none';
  table2.style.display = 'none';
  table.style.display = 'block';

  let response = await fetch('./js/data.json');

  if(response.ok) { 
    let users = await response.json();            

    let rowHeader = table.insertRow();

    for(let prop in users[0]) {
      let cell = rowHeader.insertCell();      
      cell.style.width = '150px';
      cell.style.color = 'red';
      cell.style.fontWeight = '700';
      cell.style.textAlign = 'center';
      cell.innerText = prop;      
    }

    for(let i = 0; i < users.length; i++) {
      let row = table.insertRow();

      for(let prop in users[i]) {
        let cell = row.insertCell();
        cell.style.textAlign = 'center';
        cell.innerText = users[i][prop];
      }
    }  
  } else {
    console.log(`Error: ${response.status}`);
  }        
});


btnPostRequest.addEventListener('click', () => {
  formElem.style.display = 'block';
  table.style.display = 'none';
});

formElem.addEventListener('submit', async (e) => {
  e.preventDefault();

  table2.style.display = 'block';

  let data = new FormData(formElem);
  
  let response = await fetch('./js/data.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: data
  });

  if(response.ok) { 
    let result = await response.json();   

    let rowHeader = table2.insertRow();

    for(let [name, value] of data) {
      let cell = rowHeader.insertCell();      
      cell.style.width = '150px';
      cell.style.color = 'red';
      cell.style.fontWeight = '700';
      cell.style.textAlign = 'center';
      cell.innerText = name;      
    }         
    
    let row = table2.insertRow();

    for(let [name, value] of data) {
      let cell = row.insertCell();           
      cell.style.textAlign = 'center';
      cell.innerText = value;
      console.log(value);      
    }      
  } else {
    console.log(`Error: ${response.status}`);
  }     
});

















