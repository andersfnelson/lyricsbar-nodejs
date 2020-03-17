## Project for Software Architecture class - lyricsbar

built using online resources and tutorials

NodeJS web application using the "Express Framework".
Code is written in JavaScript

### App Server Config

Create an Ubuntu 18.04.3 LTS Server

Update and Upgrade it

in order to get latest stable release of nodejs first run
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

Install NodeJS: sudo apt install nodejs
Install NPM Node Package Manager: sudo apt install npm

node -v (should be v12.something)
npm -v (should be 6.something)

### Database Server Configuration

Create an Ubuntu 18.04.3 LTS Server

Update and Upgrade it

Install and config mysql

Import database SQL file from db stuff folder

### App Setup Instructions:

clone this repository in app server

cd lyricsbar-nodejs

sudo npm i express express-session morgan passport passport-local body-parser mysql dotenv ejs bcrypt-nodejs cookie-parser connect-flash  --save

sudo npm i -D nodemon (devDependency)

create a .env file in project root - add below to file and update with your db server info (copy from edit mode in github)

port = 3000
host = '<DB-HOST>'
user = '<DB-USER>'
password = '<DB-PASSWORD>'
db = '<DB-DATABASE>'

create a .gitignore file with /node_modules & .env

### App Startup Instructions:

npm run start (for prod)
npm run dev (for development)

### Project Directory Structure

    ├── lyricsbar-nodejs (main directory)
        ├── config
            ├── db.js
            ├── passport.js
        ├── bd stuff
            ├── .sql files
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
            ├── login.js
            ├── logout.js
            ├── profile.js
            ├── signUp.js
            ├── update.js
        ├── views
            ├── partials 
                ├── header.ejs
            ├── about.ejs
            ├── addSong.ejs
            ├── displaySong.ejs
            ├── homePage.ejs
            ├── login.js
            ├── profile.ejs
            ├── signUp.ejs
            ├── update.ejs
        ├── .env
        ├── .gitignore
        ├── app.js
        ├── package.json
        ├── README.md

### known bugs

search functionality & forms break if ' is submitted
