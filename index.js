const inquirer = require("inquirer");
console.log("hello");
// inquirer
inquirer
  .prompt([
      {
          type: 'input',
          message: 'whats your role',
          name: 'role',

      },
  ])
  .then((response) =>
     console.log("finished",response)
  );
// MYsql databass
// seed sql
