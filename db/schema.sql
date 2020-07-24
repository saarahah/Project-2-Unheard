CREATE DATABASE DB_DATABASE;

USE DB_DATABASE;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	state VARCHAR(2);
	city varchar(20) NOT NULL,
	createdAt (datetime),
	updatedAt (datetime),
	PRIMARY KEY (id)
);

CREATE TABLE posts
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	body text(65535) NOT NULL,
	createdAt (datetime),
	updatedAt (datetime),
	PRIMARY KEY (id)
);


CREATE TABLE death
(
	id int NOT NULL AUTO_INCREMENT,
	state varchar(2) NOT NULL,
	year text(4) NOT NULL,
	deaths int NOT NULL,
	PRIMARY KEY (id)
);

