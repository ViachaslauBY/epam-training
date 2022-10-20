let button = document.getElementById('button'); 

let creatDeepCopy = () => {
  
  const user = {    
    age: 36,
    fullNAme: {
      firstName: 'Slava',
      lastName: 'Fedortsov'
    }
  };

  const cloneUser = JSON.parse(JSON.stringify(user)); 
  cloneUser.fullNAme.firstName = 'Fedia';
  cloneUser.fullNAme.lastName = 'Maximov';
  cloneUser.age = 35;

  jsConsole.writeLine('Object user:');
  jsConsole.writeLine(`Firstname: ${user.fullNAme.firstName}, Lastname: ${user.fullNAme.lastName}, Age: ${user.age}`);       

  jsConsole.writeLine('');

  jsConsole.writeLine('Object copy:');    
  jsConsole.writeLine(`Firstname: ${cloneUser.fullNAme.firstName}, Lastname: ${cloneUser.fullNAme.lastName}, Age: ${cloneUser.age}`);  
}                          

button.addEventListener('click', creatDeepCopy);