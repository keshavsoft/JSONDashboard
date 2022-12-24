var express = require('express');
var router = express.Router();
let CommonAsTable = require("./WithFilters/AsTable");
let CommonOnPeriod = require("./WithFilters/OnPeriod");

router.use('/AsTable', CommonAsTable);
router.use('/OnPeriod', CommonOnPeriod);

module.exports = router;