DROP TABLE IF EXISTS dealer;
DROP TABLE IF EXISTS contacts;
DROP TABLE IF EXISTS cars;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS temp_cars;

CREATE TABLE dealer (
id VARCHAR(20) NOT NULL,
name VARCHAR(20) NOT NULL,
password_hash VARCHAR(20) NOT NULL,
email VARCHAR(20),
PRIMARY KEY (id)
);

CREATE TABLE contacts (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR(20) NOT NULL,
email VARCHAR(20) NOT NULL,
phone VARCHAR(20),
message VARCHAR(20),
car_id INTEGER
);

INSERT INTO contacts (name, email,phone, message,car_id) VALUES ('Raj', 'raj@gmail.com',998877665,'the car was good',21);
INSERT INTO contacts (name, email,phone, message,car_id) VALUES ('superman', 'superman@gmail.com',998811665,'I like cars',1);



CREATE TABLE user (
id INTEGER PRIMARY KEY AUTOINCREMENT,
username VARCHAR(20) NOT NULL,
password_hash VARCHAR(20) NOT NULL
);

INSERT INTO user (username, password_hash) VALUES ('admin', 'admin');


CREATE TABLE cars (
id INTEGER PRIMARY KEY AUTOINCREMENT,
year int NOT NULL,
make VARCHAR(20) NOT NULL,
model VARCHAR(20) NOT NULL,
body_styles TEXT,
featured int
);


CREATE TABLE temp_cars (
  year int NOT NULL,
  make VARCHAR(20) NOT NULL,
  model VARCHAR(20) NOT NULL,
  body_styles TEXT
);

INSERT INTO temp_cars (year, make, model, body_styles) VALUES (2008, 'Tata', 'Nano', '["Coupe"]');


.mode csv
.import cars2010.csv temp_cars
INSERT INTO temp_cars (year, make, model, body_styles) VALUES (2008, 'Mahindra', 'Scorpio', '["SUV"]');
.import cars2011.csv temp_cars
.import cars2012.csv temp_cars
.import cars2013.csv temp_cars
INSERT INTO temp_cars (year, make, model, body_styles) VALUES (2008, 'Maruti', 'Swift', '["Coupe"]');
.import cars2014.csv temp_cars
.import cars2015.csv temp_cars
.import cars2016.csv temp_cars
.import cars2017.csv temp_cars
.import cars2018.csv temp_cars
.import cars2019.csv temp_cars
INSERT INTO temp_cars (year, make, model, body_styles) VALUES (2008, 'Tata', 'Harrier', '["SUV"]');
.import cars2020.csv temp_cars
.import cars2021.csv temp_cars
.import cars2022.csv temp_cars
.import cars2023.csv temp_cars
.import cars2024.csv temp_cars
.import cars2025.csv temp_cars
.import cars2026.csv temp_cars



INSERT INTO cars (year, make, model, body_styles) 
SELECT year, make, model, body_styles FROM temp_cars;


UPDATE cars SET featured = 1 WHERE year = 2008 AND make = 'Tata' AND model = 'Nano';
UPDATE cars SET featured = 1 WHERE year = 2008 AND make = 'Mahindra' AND model = 'Scorpio';
UPDATE cars SET featured = 1 WHERE year = 2008 AND make = 'Maruti' AND model = 'Swift';
-- UPDATE cars SET featured = 1 WHERE year = 2008 AND make = 'Tata' AND model = 'Harrier';

-- DELETE FROM temp_cars;
DROP TABLE temp_cars;


