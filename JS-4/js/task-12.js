let people = [
  { name: "Шапокляк", age: 55 },
  { name: "Чебурашка", age: 17 },
  { name: "Крыска-Лариска", age: 18 },
  { name: "Крокодильчик", age: 26 },
  { name: "Турист-завтрак крокодильчика", age: 32 },
];

let template = `<strong>-{name}-</strong><span>-{age}-</span>` 

let generateHtmlList = () => {
  let li = '';  

  for(let i = 0; i < people.length; i++) {
    li += `<li>${template.replace(/{(\w+)?}/g, (a, b) => people[i][b])}</li>`;
  }

  jsConsole.writeLine(`${li}`);
}

button.addEventListener('click', generateHtmlList);