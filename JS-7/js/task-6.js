let persons = [
  {firstname: "Natalya", lastname: "Osipenko", age: 61},
  {firstname: "Kristina", lastname: "Osipenko", age: 23},
  {firstname: "Artem", lastname: "Korhov", age: 25},
  {firstname: "Artem", lastname: "Seredinskiy", age: 20},
  {firstname: "Artem", lastname: "Artsiomenka", age: 20},
  {firstname: "Sergey", lastname: "Osipenko", age: 20},
  {firstname: "Vinni", lastname: "Puh", age: 15}
];

function groupPeople(arr) {
  let firstName = [], lastName = [], agePerson = [], res = {};

  for (let i = 0; i < persons.length; i++) {
    firstName.push(persons[i].firstname);
    lastName.push(persons[i].lastname);
    agePerson.push(persons[i].age);
  }

  res.firstname = firstName;
  res.lastname = lastName;
  res.age = agePerson; 
  
  console.log(res);

  res.age.filter((value, index, self) => self.indexOf(value) === index).forEach(el => jsConsole.writeLine(el));
  res.lastname.filter((value, index, self) => self.indexOf(value) === index).forEach(el => jsConsole.writeLine(el));
  res.firstname.filter((value, index, self) => self.indexOf(value) === index).forEach(el => jsConsole.writeLine(el));
}

let button = document.getElementById('button');

button.addEventListener('click', () => groupPeople(persons));
