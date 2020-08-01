let puppies = [{ id: 1, name: "griffy" }, { id: 2, name: "willow" }];

const router = require("express").Router();

//This is a get request, the route is /puppies/
router.get("/", (req, res) => {
  res.send(puppies);
});

router.post("/", (req, res) => {
  let newId = puppies.length + 1;
  let newPuppy = {
    id: req.body.id,
    name: req.body.name
  };
  puppies.push(newPuppy);
  res.send(puppies);
});

//similar to export default
module.exports = router;
