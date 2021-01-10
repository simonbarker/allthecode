-- prove table is empty
SELECT * FROM Students;

-- insert new students
INSERT INTO
    Students (FirstName, LastName, House, DOB)
VALUES
    ('Harry', 'Potter', 'Gryffindor', '1980-07-31')
  , ('Draco', 'Malfoy', 'Slytherin', '1980-05-05')
  , ('Hermione', 'Granger', 'Gryffindor', '1979-09-19');

-- prove table has records
SELECT * FROM Students;

-- select everything from students and insert into alumni
INSERT INTO
    Alumni
SELECT * FROM Students;

-- prove alumni has records now
SELECT * FROM Alumni;