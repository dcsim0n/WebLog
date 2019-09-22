/**
|--------------------------------------------------
| Index route files
|--------------------------------------------------
*/

const express = require('express');
const router = express.Router();
const { indexPage } = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexPage);

module.exports = router;
