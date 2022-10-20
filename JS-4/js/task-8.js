let button = document.getElementById('button');              

let extractText = () => {
  let text = document.getElementById('text').value;
  let res = text.replace(/<a href="(.*?)">/g, '[URL=$1]');
  let res2 = res.replace(/(.*?)<\/a>/g, '$1[\/URL]');
  jsConsole.writeLine(res2); 
}

button.addEventListener('click', extractText); 