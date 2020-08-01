### `This app is about how to set up express server and routes.`

## Available Scripts

In the project directory, you can run:

#### `node server.js`

#### or

#### `nodemon server.js`

Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

#### `control + c`

Quit the development mode.

### `Dependencies`

- express
- morgan
- nodemon

## Basic syntax about Node

```js
//export in someFile.js
module.exports = someFunction;
//import
const someFunction = require("./someFile.js");

//export in someFile.js
module.exports = { num1, str2, arr3, obj4 };
//import
const { num1, str2, arr3, obj4 } = require("./someFile.js");
```

## Package should be installed before this project.

#### `location: inside of the folder`

```bash
$ npm install --save express
$ npm install --save nodemon
$ npm install morgan
```

### 1. Create a server.

#### `location: ./server/index.js`

```js
const express = require("express");
const app = express();
const port = 4000;

/*
Middleware here!
*/

/*
Routes here!
*/

const server = app.listen(port, () => {
  console.log(`Port ${port} is listening now.==============>`);
});
```

#### `run the server`

```bash
$ nodemon server/index.js
```

#### `note:`

<ol><li>After you run the server, you can go to localhost:4000 on your browser.</li>
<li>The reason why we install nodemon is that we can have a tool to monitor our server code and restart it when there is a change.</li>
</ol>

### 2. Add Middleware.

#### `Location: ./server/index.js`

```js
const express = require("express");
const app = express();
const port = 4000;

//Middleware here!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const morgan = require(`morgan`);
app.use(morgan("dev"));

/*
Routes here!
*/

const server = app.listen(port, () => {
  console.log(`Port ${port} is listening now.==============>`);
});
```

#### `note:`

<ol>
<li>We can read the documentation about these Middlewares.</li>
</ol>

### 3. About Routes

- We have done front-end routing, which allows us control the view of our app based on different GET requests we make with a browser via the url bar.

- We can also set up a back end at a web address, and the urls we send to it will also represent requests we make to the API that is listening for requests at that address.

- <em>`So a url can be used for front-end, also for back-end.`</em>
- Example: create a simple route in the server.
- Location: server/index.js

```js
//Make it a get route.
app.get(`/puppies`, (req, res) => {
  res.send("Here is a puppy!");
  //res.json('Here is a puppy!')
});

//Make it a variable route.
app.get("/puppies/:puppy", (req, res) => {
  const name = req.params.puppy;
  res.send(`This is ${name}`);
});
```

#### `note:`

<ol>
<li>Add notes here.</li>
</ol>

### 4. Route trees

- Originally we can add our routes to server/index.js, but we can organize things a lot better by separating them.

- (Chinese) 正如前端使用 react-router-dom 去组织前端路径树一样，express 也有相似功能让你更好地组织后端路径树,这是提升文档组织性的方法，像工程师一样思考。

#### `Step 1: Add a center route in ./server/index.js, we can call it 'api'`

```js
app.use("/api", require("./api"));
```

#### `note:`

<ol>
<li>We set up every start with '/api' will go to the file index.js inside of the folder './api'.</li>
</ol>

- Finally the ./server/index.js should look like this:

```js
const express = require("express");
const app = express();
const port = 4000;

//Middleware here!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const morgan = require(`morgan`);
app.use(morgan("dev"));

//Routes here!
app.use("/api", require("./api"));

const server = app.listen(port, () => {
  console.log(`Port ${port} is listening now.==============>`);
});
```

#### `Step 2: Create a api folder inside of your server folder, create a index.js file`

- This index.js file is a central clearing house for our api routes, so we can access all api routes by going through "/api" first.

```js
//Router is similar to app in ./server/index.js
const router = require("express").Router();

//similar to import App from 'App/js';
//app.use("/api", require("./api"));
router.use("/puppies", require("./puppies"));
router.use("/tests", require("./tests"));
router.use("/students", require("./students"));

//similar to export default
module.exports = router;
```

`Note:`

- You will get an error if you don't comment out the first two routes.
- (Chinese)router 分配路径和其对应的文件，“路径---文件” 连接，关键词：use。

#### `Step 3: Create a route js file inside the api folder, for example ,name the file 'students.js', so that we can export it to /api/index.js`

```js
let students = [
  { id: 1, name: "John" },
  { id: 2, name: "Jim" },
  { id: 3, name: "Jane" }
];
//same as what we do in  ./server/api/index.js
const router = require("express").Router();

//This is a get request route, the route is '/api/students'
//For querying all items.
router.get("/", (req, res) => res.send(students));

//This is a post request route, the route is '/api/students'
//For adding a new item.
//should get a prameter call name which is from request
router.post("/", (req, res) => {
  let newId = students.length + 1;
  let newStudent = {
    id: newId,
    name: req.body.name
  };
  students.push(newStudent);
  res.send(students);
});

//This is a put request route, the route is '/api/students/:id'
//For updating a new item.
//should get a parameter call id which is from request
router.put("/:id", (req, res) => {
  //Type of 'req.params.id' is string
  let id = Number(req.params.id);
  let name = req.body.name;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) students[i].name = name;
  }
  res.send(students);
});

//This is a post request route, the route is '/api/students/:id'
//For deleting a new item.
//should get a parameter call id which is from request
router.delete("/:id", (req, res) => {
  //Type of 'req.params.id' is string
  let id = Number(req.params.id);
  students = students.filter(el => el.id !== id);
  res.send(students);
});

//same as what we do in  ./server/api/index.js
module.exports = router;
```
