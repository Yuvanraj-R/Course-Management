### 

### 

### MYSQL :

### 

### TO ENTER THE DATA IN WEBPAGE OR LOCALHOST PAGE YOU NEED CREATE A DATABASE AND ENTER A FAKE DATA IN IT 







1)open MySQL shell:



&nbsp;  type the following :

&nbsp;   \\sql

&nbsp;   \\connect root@localhost:3306(now it will ask for password , so enter your password for MySQL

(now it is connected)



2\)

query to enter :





CREATE DATABASE course\_management;

USE course\_management;





CREATE TABLE users (

&nbsp;   id INT AUTO\_INCREMENT PRIMARY KEY,

&nbsp;   name VARCHAR(100) NOT NULL,

&nbsp;   email VARCHAR(150) NOT NULL UNIQUE,

&nbsp;   password VARCHAR(255) NOT NULL,

&nbsp;   role ENUM('ADMIN', 'TEACHER', 'STUDENT') NOT NULL DEFAULT 'STUDENT',

&nbsp;   superset\_id VARCHAR(50) UNIQUE,

&nbsp;   github\_repo VARCHAR(255),

&nbsp;   created\_at TIMESTAMP DEFAULT CURRENT\_TIMESTAMP,

&nbsp;   updated\_at TIMESTAMP DEFAULT CURRENT\_TIMESTAMP ON UPDATE CURRENT\_TIMESTAMP

);







(Remainder ::

step 1 :

the password entering in sql should be a hashed password , so go to this link \[https://bcrypt-generator.com/] or any other hash generator 

STEP 2 :The hashed password should be entered in sql but the original text should be entered inn the original login page.)







3)INSERT INTO users (name, email, password, role, superset\_id, github\_repo)

VALUES (

&nbsp; 'Ravi Kumar',

&nbsp; 'student@student.com',

&nbsp; '$2y$10$nh8om/CxaHXuHChAdLlXW.sbLC6FXVurEJaKQx.1S8xm3kRAqguZa',

&nbsp; 'STUDENT',

&nbsp; 'STU5678',

&nbsp; 'https://github.com/ravi/student-repo'

);





INSERT INTO users (name, email, password, role, superset\_id, github\_repo)

VALUES (

&nbsp; 'Admin User',

&nbsp; 'admin@gmail.com',

&nbsp; '$2y$10$nh8om/CxaHXuHChAdLlXW.sbLC6FXVurEJaKQx.1S8xm3kRAqguZa',

&nbsp; 'ADMIN',

&nbsp; 'SUP1234',

&nbsp; 'https://github.com/admin/course-platform'

);



SELECT \* FROM users;









# COMMAND PROMPT :



STEP 1: enter your path

cd C:\\Projects\\CourseApp --- for example

STEP 2 :

cd CourseApp

STEP 3 :

npm install

STEP 4 :

npm start



NEXT THE WEB PAGE OPENSSSS LOCALHOST:3306

&nbsp;NOW GO TO INTELIJ OR ANY OTHER CODING PLATFORM



# BACKEND ---- INTELIJ or VSS (ANYTHING)





step 1 : press open folder and select the project and open 

step 2 : files of project will be open no do some changes in it 

step 3: go to backend folder -- course platform --- src -- main  -- resources --- application.properties



i)spring.datasource.url=jdbc:mysql://localhost:3306/course\_management

ii)spring.datasource.password=Yuviyuvan@369

&nbsp;change these two according to use database name and root password





step 4 : now go to backend folder -- course platform --- src -- main -- java -- courseplatformapplication



&nbsp;           now run the courseplatformapplication file



# NOW OPEN THE WEBPAGE PREVIOUSLY OPENED (LOCALHOST:3306)



1. SELECT STUDENT OR ADMIN
2. NOW ENTER THE EMAIL ENTERED IN MYSQL
3. NOW ENTER THE ORIGINAL TEXT PASSWORD INSTEAD OF HASHED PASSWORD







&nbsp;         NOW THE COURSE MANAGEMENT WEBPAGE OPENS AND YOU ARE READY TO DO ANYTASK IN IT







