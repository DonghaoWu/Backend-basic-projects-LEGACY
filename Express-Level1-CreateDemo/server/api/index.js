//set up different routes
const router = require("express").Router();

//similar to import App from 'App/js';
//app.use("/api", require("./api"));
router.use("/puppies", require("./puppies"));
router.use("/students", require("./students"));
router.use("/tests", require("./tests"));

//similar to export default
module.exports = router;
