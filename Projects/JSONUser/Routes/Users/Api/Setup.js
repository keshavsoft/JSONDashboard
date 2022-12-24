var express = require('express');
var router = express.Router();
let Repo = require("../../../Repository/Users/Api/Setup");
let Controller = require("../../../controllers/Users/Api/setup.controller");

router.get('/:inUserPK', function (req, res, next) {
    let LocalUserPK = req.params.inUserPK;
    
    Repo.Basic({
        inUserPK: LocalUserPK
    }).then((PromieData) => {
        res.end(JSON.stringify(PromieData));
    }).catch((PromiseError) => {
        res.end(JSON.stringify(PromiseError));
    });
});

router.get('/FoldersOnly/:inUserPK', Controller.CreateFoldersOnly);
router.get('/ForSql/FoldersOnly/:inUserPK', Controller.CreateForMsSql);


module.exports = router;