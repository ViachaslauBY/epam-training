let persons = [
  {firstname: "Natalya", lastname: "Osipenko", age: 61},
  {firstname: "Kristina", lastname: "Osipenko", age: 23},
  {firstname: "Artem", lastname: "Korhov", age: 25},
  {firstname: "Artem", lastname: "Seredinskiy", age: 20},
  {firstname: "Artem", lastname: "Artsiomenka", age: 20},
  {firstname: "Sergey", lastname: "Osipenko", age: 20},
  {firstname: "Vinni", lastname: "Puh", age: 15}
];

let findYoungestPerson = (persons) => {
  let youngest = persons.reduce((a, b) => a.age < b.age ? a : b);    
  return `${youngest.firstname} ${youngest.lastname} - ${youngest.age}`;
}
        
let button = document.getElementById('button');

button.addEventListener('click', () => {    
  jsConsole.writeLine('The youngest person is:');
  jsConsole.writeLine(findYoungestPerson(persons));
});