# Task manager

#### This project was implemented in order to teach the Express framework and MongoDB.
### Server (REST API)
The following libraries were used in this project:
* [cors](https://github.com/expressjs/cors)
* [express](https://github.com/expressjs/express)
* [mongoose](https://github.com/Automattic/mongoose)
* [dotenv](https://github.com/motdotla/dotenv)

### Installation:
1. To automatically initialize the backend, enter this command in the terminal command`make init-server`.

2. In the `.env` file, in the `MONGO_DB_URL` variable, insert a link to your database in [MongoDB](https://account.mongodb.com/account/login). If you want to use your own port, specify it in the `PORT` variable. The default port is `5001`
3. To start server use comand `make start-backend` in root project folder.

If you want to do it manually, 
* then go to the server directory: `cd server`
* install dependencies: `npm install`, or run this command in the root project folder `make install-backend` 
* rename file `.env.`template to `.env`:  `cp .env.template .env
* In the `.env` file, in the `MONGO_DB_URL` variable, insert a link to your database in [MongoDB](https://account.mongodb.com/account/login). If you want to use your own port, specify it in the `PORT` variable. The default port is `5001`
* If you want to use static files or layout, then create a public directory: `mkdir public`
