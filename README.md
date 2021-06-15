# BackEnd Test 57Blocks

This is a backend test project for the 57Blocks enterprise.
This project was created in Node.js and express.

# Installation
- Clone or download the repository. If you want to Clone te repository use Git clone https://github.com/yostinbr/backEndTest57Blocks.git
- The dependencies must be updated. Open a terminal or console and run npm install
- In the folder sql you can find a database.sql file. Make a database with those scripts.
- In the root of the project create a .env file. Please check the .env.example file
- There are a .env.example file with information for you can configure the .env file.
- Then you can use the project. Open a terminal or console and run npm run dev

# Usage
If the steps were executed correctly. you can use the following functionalities.

- Register users in the system.
- Login to the system
## After logged in you can: 
- Get the public videos
- Create a private video
- Get all private videos
- Get a private video
- Update a private video
- Delete a private video
- Give like to a public video
- Get all videos that you liked
# Api's Usage
- First, register users in the system. Use the next endpoint: localhost:port/api/users/
  ![img](http://imgur.com/a/Q6YGBpB)
- Second, login to the system. Then copy the token that Api returned. Use the next endpoint: localhost:port/api/users/login
- Then, in every endpoint, you must pass In the headers  the token as Authorization.