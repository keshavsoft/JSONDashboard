var express = require('express');
var router = express.Router();
let CommonParentClasses = require("./SubKeys/ParentClasses");

router.use('/ParentClasses', CommonParentClasses);

module.exports = router;