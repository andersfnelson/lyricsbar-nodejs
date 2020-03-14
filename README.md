## Project for Software Architecture class - lyricsbar

built using online resources and tutorials

NodeJS web application using the "Express Framework".
Code is written in JavaScript

### App Server Config

Create an Ubuntu 18.04.3 LTS Server

Update and Upgrade it

Install NodeJS: sudo apt install nodejs
Install NPM Node Package Manager: sudo apt install npm

### Database Server Configuration

Create an Ubuntu 18.04.3 LTS Server

Update and Upgrade it

Install and config mysql

Import database SQL file

### App Setup Instructions:

clone this repository in app server

cd lyricsbar-nodejs

sudo npm i express body-parser mysql dotenv ejs  --save

sudo npm i -g nodemon

create a .env file in project root - add below to file and update with your db server info (copy from edit mode in github)

port = 3000
host = '<DB-HOST>'
user = '<DB-USER>'
password = '<DB-PASSWORD>'
db = '<DB-DATABASE>'

create a .gitignore file with /node_modules & .env

### App Startup Instructions:

nodemon run

### Project Directory Structure

    ├── lyricsbar (main directory)   
    ├── node_modules
    ├── public
        ├── css
            ├── style.css
        ├── imgs
            ├── icon.ico
        ├── js
            ├── rowclick.js
    ├── routes
        ├── about.js
        ├── addSong.js
        ├── delete.js
        ├── displaySong.js
        ├── homePage.js
        ├── profile.js
        ├── signIn.js
        ├── signUp.js
        ├── update.js
    ├── views
        ├── partials 
            ├── header.ejs
        ├── about.ejs
        ├── addSong.ejs
        ├── displaySong.ejs
        ├── homePage.ejs
        ├── profile.ejs
        ├── signIn.ejs
        ├── signUp.ejs
        ├── update.ejs
    ├── app.js
    ├── package.json
    ├── .env

### known bugs

search functionality & forms break if ' is submitted
