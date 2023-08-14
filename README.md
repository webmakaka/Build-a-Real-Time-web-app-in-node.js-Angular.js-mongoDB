# [Udemy] Build a Real Time web app in node.js, Angular.js, mongoDB

<br/>

I'm working on Ubuntu in docker container with debian jessie:

    $ lsb_release -a
    Distributor ID:	Ubuntu
    Description:	Ubuntu 14.04.5 LTS
    Release:	14.04
    Codename:	trusty


<br/>

    $ docker -v
    Docker version 1.9.1, build a34a1d5

<br/>


<a href="//jsdev.org/env/docker/">How to run docker container for start development</a>
(If link will not work give me to know about it)

<br/>

    # node -v
    v6.8.1

    # npm -v
    3.10.8



Run Application:


    $ git clone application_name
    $ npm install
    $ npm start


http://localhost:3000/login

    username: batman  
    password: abc123  

<br/>

![Application](/img/issue_01.png?raw=true)


<br/>

If you will receive error:

    Cannot find module '../build/Release/bson'] code: 'MODULE_NOT_FOUND' } js-bson: Failed to load c++ bson extension, using pure JS version


Solution:

http://stackoverflow.com/questions/28651028/cannot-find-module-build-release-bson-code-module-not-found-js-bson


____

Original src:  
https://github.com/arashdoescode/userStory

____

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


### 18_-_Decoded_user_s_information (code not tested)

___

## Frontend

### 19_-_Setup_the_front-end_files

### 20_-_First_Angular_Service_part_1_-_Creating_Auth_Factory (code not tested)

### 21_-_First_Angular_Service_part_2_-_Creating_AuthToken_Factory (code not tested)

### 22_-_First_Angular_Service_part_3_-_Creating_AuthInterceptor_Factory (code not tested)

### 23_-_First_Angular_Controller_-_Creating_Main_Controller_for_Login_and_Logout (code not tested)


### 24_-_Routing_System

http://cdnjs.com/libraries/angular.js/  

http://localhost


### 25_-_Login_Html

### 26_-_Signup_Frontend (Code not working! That's ok)

### 27_-_Testing_Login_and_Logout

http://localhost:3000/login

username: batman  
password: abc123  


### 28_-_Fix_sIgnup_bugs

### 29_-_Creating_Story_service_and_controller_part_1_  
### 30_-_Creating_Story_service_and_controller_part_2_

### 31_-_Adding_real-time_capability

    npm install --save socket.io

### 32_-_Getting_All_Stories

http://localhost:3000/allStories

### 33_-_Creating_a_new_directive_-_reverse.js

http://localhost:3000  
http://localhost:3000/allStories

### 34_-_Deploy_our_app_to_heroku

============================================

![Application](/img/app.png?raw=true)


<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
