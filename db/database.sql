-- CREATE DATABASE IF NOT EXISTS companydb;

-- USE companydb;

CREATE TABLE employee (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(5) DEFAULT NULL, 
  PRIMARY KEY(id)
);
CREATE TABLE RRHH (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  phone VARCHAR(11) DEFAULT NULL,
  salary INT(5) DEFAULT NULL, 
  PRIMARY KEY(id)
);
INSERT INTO RRHH values 
  (1, 'Pepe','3117325524',1022000),
  (2, 'Jack','623771920' ,2031000),
  (3, 'Carlo','7381190245' ,2542000),
  (4, 'Mafer', '3011402512',1544000);





DESCRIBE employee;

INSERT INTO employee values 
  (1, 'Joe', 1000),
  (2, 'Henry', 2000),
  (3, 'Sam', 2500),
  (4, 'Max', 1500);

