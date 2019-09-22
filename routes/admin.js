/**
|--------------------------------------------------
| /admin Routes File
|--------------------------------------------------
*/

const express = require('express');
const router = express.Router();

const { adminPage } = require('../controllers/adminController');

/* /admin routes */

router.get('/', adminPage );

module.exports = router;