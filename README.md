# Auth Microservice

- Packages used `express, body-parser, dotenv, mysql2, sequelize, sequelize-cli, bcrypt, jwt`.
- Created Signup API using which user can use their email and password for the process.
- Used Bcrypt to hash the password while storing it in database to increase the security.
- For Signin API used the JWT Token builder which builds up the token using Email ID and password.
- If the user is verified he can make request for booking flight using the booking service else throw error.