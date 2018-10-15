# Game of Drones  BackEnd-Application

This code holds the API wich allows to store all the information about the games.

## Getting Started

After the download of the code, remember to run ```npm install``` to get all the modules wich are dependencies.
It is necessary to have MongoDB running. So before running the server install MongoDB following these instructions: 
``` https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/  ``` (for Windows).

An example of mongo execution: ``` "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="d:\MongoData\data\db" ```

Once you execute mongo and get "waiting for connections on port 27017" on the console, then run the server with:
```node server/server``` in the folder of the downloaded project.

### Brief Description

This server exposes services to publish and obtain both the games and their rounds.


## Author

Marcos Fierro.
