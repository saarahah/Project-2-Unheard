CREATE DATABASE DB_DATABASE;

USE DB_DATABASE;

CREATE TABLE user
(
	id int NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	createdAt (datetime),
	updatedAt (datetime),
	PRIMARY KEY (id)
);

CREATE TABLE blog
(
	id int NOT NULL AUTO_INCREMENT,
	story text(65535) NOT NULL,
	alias varchar(20) NOT NULL,
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