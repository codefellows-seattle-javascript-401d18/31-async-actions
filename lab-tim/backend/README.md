# Lab 13 - Single Mongo Resource
## Tim Turner
=====================================

### Description

This app is a HTTP server.  You can send POST, PUT, GET, and DELETE requests to the server and get a response.  The valid only API endpoint is `/api/toy`.

To run the server, you must have NodeJS installed.  You also have to run npm install to download the npm required modules.  These commands listed below to interact with the server require HTTPie to be installed on your computer.  After you have those done, type "node server.js" in the terminal window.  The server will now be running.

This server uses MongoDB for data storage.  To run the database you must have MongoDB installed.  

To send requests to the server, in another terminal windows, type some of the following commands.


`http POST localhost:3000/api/toy name=slinky desc=plastic` should create a new toy named slinky with a description of metal and return a message with the toy id, name, and description if successful.

`http PUT localhost:3000/api/toy _id="some-id-string" name=stuffy desc=blue` should update a toy record by the ID string provided.

`http GET localhost:3000/api/toy/"some-id-string"` should get by the provided ID string.  The toy ids are initialized on successful toy creation.  This will return the toy with it's id, name, and description properties.

`http DELETE localhost:3000/api/toy/"some-id-string"` should delete a toy record by the ID string provided.


Type control + C to stop the server.
