let students = [
  { id: 1, name: "John" },
  { id: 2, name: "Jim" },
  { id: 3, name: "Jane" }
];

const router = require("express").Router();

//This is a get request, the route is '/api/students'
//For querying all items.
router.get("/", (req, res) => res.send(students));

//This is a post request, the route is '/api/students'
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

router.get("/:id", (req, res) => {
  //Type of 'req.params.id' is string
  let id = Number(req.params.id);
  let name = req.body.name;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) res.send(students[i]);
  }
});

//This is a put request, the route is '/api/students'
//For updating a new item.
//should get a prameter call id which is from url
router.put("/:id", (req, res) => {
  //Type of 'req.params.id' is string
  let id = Number(req.params.id);
  let name = req.body.name;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) students[i].name = name;
  }
  res.send(students);
});

//This is a post request, the route is '/api/students'
//For deleting a new item.
//should get a prameter call id which is from request
router.delete("/:id", (req, res) => {
  //Type of 'req.params.id' is string
  let id = Number(req.params.id);
  students = students.filter(el => el.id !== id);
  res.send(students);
});

//similar to export defaul/1t
module.exports = router;
