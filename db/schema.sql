CREATE DATABASE burgers_db; 

USE burgers_db;

CREATE TABLE burgers (
    id int AUTO_INCREMENT, 
    burger_name VARCHAR(100) NOT NULL, 
    devoured BOOLEAN NOT NULL, 
    PRIMARY KEY(id)
);

