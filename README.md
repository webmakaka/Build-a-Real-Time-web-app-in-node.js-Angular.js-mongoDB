# Build-a-Real-Time-web-app-in-node.js-Angular.js-mongoDB

[udemy] Build a Real Time web app in node.js, Angular.js, mongoDB

## Server side

### 4_-_Start_your_first_project

    npm install --save express
    npm install --save body-parser
    npm install --save morgan

    nodemon server.js


### 5_-_Setting_up

### 6_-_Your_first_Hello_World

http://localhost:3000/

### 7_-_Create_a_database

https://mongolab.com

    npm install --save mongoose


### 8_-_Your_first_Schema_-_Creating_User_Schema


### 9_-_Password_hashing

    npm install --save bcrypt-nodejs

### 10_-_Create_a_custom_method

### 11_-_Your_first_API_-_Signup_API

postman

POST -> localhost:3000/api/signup

x-www-form-urlencoded

name: Bruce  
username: batman  
password: abc123  

### 12_-_Get_all_users_API

http://localhost:3000/api/users

### 13_-_Login_API

    npm install --save jsonwebtoken

postman

POST -> localhost:3000/api/login

x-www-form-urlencoded

username: batman  
password: abc123  


### 14_-_Create_a_custom_middleware (code not tested)


### 15_-_Test_the_middleware

postman

POST -> localhost:3000/api/login

x-www-form-urlencoded

username: batman  
password: abc123


Headers

GET -> localhost:3000/api/

URL Parameter Key: x-access-token
Value: token


### 16_-_Your_second_Schema_-_Creating_Story_Schema (code not tested)


### 17_-_Post_method_in_Home_API



postman

GET -> localhost:3000/api/users
POST -> localhost:3000/api/login

__

POST -> localhost:3000/api/
URL Parameter Key: x-access-token
Value: token

x-www-form-urlencoded

key: content
value: Hello this is my first post!

__

GET -> localhost:3000/api/
URL Parameter Key: x-access-token
Value: token
