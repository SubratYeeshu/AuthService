# Auth Microservice

- Install packages `express, body-parser, dotenv, mysql2, sequelize, sequelize-cli`
- Setup .env and server
- Make the folder structure
- npx sequelize:init
- Move the folders
- setup config.json for DB, put it in dotenv
- npx sequelize db:create
- user model creation
- `npx sequelize model:generate --name User --attributes email:string,password:string`
- `npx sequelize db:migrate`
- role model creation
- `npx sequelize model:generate --name Role --attributes name:string`