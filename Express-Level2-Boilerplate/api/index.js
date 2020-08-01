//Set up a Route component, as a center route
const router = require("express").Router();

//Server route '/api/students'
router.use("/examples", require("./examples"));
//Server route '/api/test'
router.use("/test", require("./test"));
//Add you new route below

//similar to export default in react
module.exports = router;
