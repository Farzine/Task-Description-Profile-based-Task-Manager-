CREATE DATABASE todoapp;

CREATE TABLE todo (
  id INT PRIMARY KEY,
  user_email VARCHAR(255),
  title VARCHAR(255),
  progress VARCHAR(255),
  date VARCHAR(300)
);

CREATE TABLE user (
  email VARCHAR(255) PRIMARY KEY,
  hashed_password VARCHAR(255)
);
 