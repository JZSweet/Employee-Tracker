DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR(30)
);
INSERT INTO department (name)
VALUES ('sales');