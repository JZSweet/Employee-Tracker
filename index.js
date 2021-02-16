const inquirer = require("inquirer");
var mysql = require("mysql");
console.log("hello");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "SweetZhao1968!",
  database: "employee_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  
  // inquirer
  inquirer
    .prompt([
        {
            type: 'input',
            message: 'whats your role',
            name: 'role',
  
        },
    ])
    .then((response) => {
       console.log("finished",response)
       connection.query("SELECT * FROM employee_db.department;",function(err,res){
         console.log(res)
       })
       connection.end()
    });
});

// MYsql databass
// seed sqls
