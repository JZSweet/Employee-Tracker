const inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'SweetZhao1968!',
  responsebase: 'employee_db'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId + '\n');
  startMenuMenu();
});

// inquirer
function startMenuMenu() {
  inquirer
    .prompt([
      {
        name: 'command',
        type: 'list',
        message: 'Welcome to the employee tracker. Please insert your command.',
        choices: ['View', 'Add', 'Update', 'Exit']
      },
      {
        name: 'type',
        type: 'list',
        message: 'Select type',
        choices: ['Employees', 'Roles', 'Departments']
      },
    ])
    .then((response) => {

      switch (response.command) {
        case 'View all employees':
          viewEmployee();
          break;

        case 'View all roles':
          viewRole();
          break;

        case 'View all departments':
          viewDepartment();
          break;
      }
      break;
      
    // Add
      switch (response.type) {
        case 'Employees':
          newEmployee();
          break;

        case 'Role':
          newRole();
          break;

        case 'Department':
          newDepartment();
          break;

        case 'Edit':
          Edit();
          break;
      }
      break;

    });
  connection.end()
};

function viewEmployee() {
  connection.query('SELECT * FROM employee', (err, res) => {
    if (err) throw err;
    console.table(res);
    startMenu();
  });
};

function viewRole() {
  connection.query('SELECT * FROM role', (err, res) => {
    if (err) throw err;
    console.table(res);
    startMenu();
  });
};

function viewDepartment() {
  connection.query('SELECT * FROM department', (err, res) => {
    if (err) throw err;
    console.table(res);
    startMenu();
  });
};

function newEmployee() {
  inquirer
    .prompt([
      {
        name: 'firstName',
        type: 'input',
        message: 'Enter employee first name',
      },
      {
        name: 'lastname',
        type: 'input',
        message: 'Enter employee last name',
      },
    ])
    .then(function (response) {
      connection.query('INSERT INTO employee SET ?', {
        first_name: response.firstName,
        last_name: response.lastName,
      },
        (err, res) => {
          if (err) throw err;
          console.table(res);
          startMenu();
        });
    });
};

function newRole() {
  inquirer
    .prompt([
      {
        name: 'title',
        type: 'input',
        message: 'Enter the title for this role.'
      },
      {
        name: 'salary',
        type: 'input',
        message: 'Enter the salary for this role.'
      }
    ]).then(response => {
      connection.query('INSERT INTO role SET ?', {
        title: response.title,
        salary: response.salary,
      },
        (err, res) => {
          if (err) throw err;
          console.table(res);
          startMenu();
        })
    });
};

function newDepartment() {
  inquirer
    .prompt([
      {
        name: 'departmentName',
        type: 'input',
        message: 'Enter the name for the department.'
      }
    ]).then(response => {
      connection.query('INSERT INTO department SET ?', {
        name: response.departmentName
      }, (err, res) => {
        if (err) throw err;
        console.table(res);
        startMenu();
      })
    });
};


