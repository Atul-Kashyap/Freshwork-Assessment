# Freshwork Assessment
- [Problem Statement](#problem-statement)    
- [Approach](#Approach)
- [Result](#Result)
    
    
    
    
    
    
# Problem Statement

This is a file which can be exposed as a library that supports the basic CRD(create, read, write) operations. Data store is meant to local storage for one single process on single laptop

The data store will support the following :

    It can be initialized using an optional file path. If one is not provided, it will reliably create itself in a reasonable location on the laptop.
    
    A new key-value pair can be added to the data store using the Create operation. The key is always a string - capped at 32chars. The value is always a JSON object - capped at 16KB.
    
    If Create is invoked for an existing key, an appropriate error must be returned.
    
    A Read operation on a key can be performed by providing the key, and receiving the value in response, as a JSON object.
    
    A Delete operation can be performed by providing the key.
    
    Every key supports setting a Time-To-Live property when it is created. This property is optional. 
    
    If provided, it will be evaluated as an integer defining the number of seconds the     key must be retained in the data store. Once the Time-To-Live for a key has expired, the     key will no longer be available for Read or Delete operations.
    
    Appropriate error responses must always be returned to a client if it uses the data store in unexpected ways or breaches any limits.
    
    The file size never exceed 1GB.
    
    The file is accessed by multi-threading.
    
# Approach 

Add Employee name and email-id in json file using node.js

Now, we need to install a few things to get going, namely:

Check npm version by using below code in terminal :

```
$ node -v
```

if npm is not installed then install npm by using below code :

```
$ install npm
```
Express is a web application framework that provides lots of awesome features and HTTP utility methods

```
npm install express
```
Nodemon is super helpful because it acts as a file-watcher, reloading our server when we make changes to our files – handy!
```
npm install nodemon --save-dev
```
Add a couple of folders and files so that your project structure looks something like this:

```
/Freshwork Assessment/
  index.html
  style.css
  app.js
  index.js
  words.json
```
Open up app.js and add in the following code:

```java script
// load up the express framework and body-parser helper
const express = require('express');
const bodyParser = require('body-parser');

// create an instance of express to serve our end points
const app = express();

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
const fs = require('fs');

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is where we'll handle our various routes from
const routes = require('./routes/routes.js')(app, fs);

// finally, launch our server on port 3001.
const server = app.listen(3001, () => {
  console.log('listening on port %s...', server.address().port);
});

```

 # Result 


![](https://github.com/Atul-Kashyap/Freshwork-Assessment/blob/main/images/HomePage.PNG) 


- [Go Up](#freshwork-Assessment)
