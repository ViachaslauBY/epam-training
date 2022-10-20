let button = document.getElementById('button');       

let parseUrl = () => {   
  
  let url = new URL(document.getElementById('string').value);

  let res = {};  
  res.protocol = url.protocol;
  res.server = url.host;
  res.resource = url.pathname;

  let json = JSON.stringify(res, null, 2);  
  jsConsole.writeLine(json);    
}                                  

button.addEventListener('click', parseUrl);