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
- First, register users in the system. Use the next endpoint (for example): localhost:port/api/users/ and the next parameters.
    ```
        {
            "name": "Your name",
            "phone": "55124515",
            "email": "youremail@gmail.com",
            "password": "yourPassword"
        }
    ```
- Second, login to the system. Then copy the token that Api returned. Use the next endpoint (for example): localhost:port/api/users/login and the next parameters.
    ```
        {
            "email": "youremailregistered@gmail.com",
            "password": "yourPassword"
        }
    ```
## Then, in every endpoint, you must pass In the headers  the token as Authorization. Use the next endpoint(for example: localhost:port/api/videos). 
- If you want to get all public videos, use (for example) localhost:port/api/videos/ with GET method and the Api return a collection with all public videos.

- If you want to create a private video, use (for example) localhost:port/api/videos/ with POST method.
    ```
        {
            "title": "your title",
            "url": "https://www.youtube.com/watch?v=TUVcZfQe-Kw&ab_channel=DuaLipaDuaLipaCanaloficialdeartista",
            "description": "video description"
        }
    ```

- If you want to get a video use (for example) localhost:port/api/videos/id_video (id_video must to be a integer) with GET method and the Api return a JSON with de video data.

- If you want to delete a video use (for example) localhost:port/api/videos/id_video (id_video must to be a integer) with DELETE method and the Api return a JSON with a message.

- If you want to create a private video, use (for example) localhost:port/api/videos/id_video (id_video must to be a integer) with PUT method.
    ```
        {
            "title": "your new title",
            "url": "https://www.youtube.com/watch?v=TUVcZfQe-Kw&ab_channel=DuaLipaDuaLipaCanaloficialdeartista",
            "description": "update video description"
        }
    ```

- If you want to get all private videos, use (for example) localhost:port/api/videos/private with GET method and the Api return a collection with all private videos.

- If you want to give like to a public video use (for example) localhost:port/api/videos/like with POST method.
    ```
        {
            "video_id": 1,
            "liked": 1,
            "comments": "I really love this video",
            "recommended": 1
        }
    ```

- If you want to get all videos that you liked, use (for example) localhost:port/api/videos/liked with GET method and the Api return a collection with all all videos that you liked.

## This is a basic documentation for the collection of generated Apis

    https://documenter.getpostman.com/view/14945605/TzeRqqPU#7803f20f-a183-4f7a-994b-362c811029f9

## Greetings
Thank you for allowing me to participate in the selection process. I hope I have met the requirements.