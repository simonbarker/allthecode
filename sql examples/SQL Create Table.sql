CREATE TABLE Students (
    StudentID int NOT NULL AUTO_INCREMENT
    ,FirstName varchar(50) NOT NULL
    ,LastName varchar(50) NOT NULL
    ,House varchar(50)
    ,DOB Date NOT NULL
    ,PRIMARY KEY (StudentID)
);

DESCRIBE Students;

ALTER TABLE Students AUTO_INCREMENT=100;

ALTER TABLE Students ADD INDEX LastNameIndex (LastName);

DROP INDEX LastNameIndex ON Students;

SHOW INDEX FROM Students;