let tests = [
  { id: 1, score: 99, subject: "Physics", studentID: 2 },
  { id: 2, score: 87, subject: "Physics", studentId: 1 },
  { id: 3, score: 37, subject: "Physics" }
];

const router = require("express").Router();

//This is a get request, the route is /puppies/
router.get("/", (req, res) => {
  res.send(tests);
});

router.post("/", (req, res) => {
  let newId = tests.length + 1;
  let newTest = {
    id: req.body.id,
    name: req.body.name
  };
  tests.push(newTest);
  res.send(tests);
});

//similar to export default
module.exports = router;
