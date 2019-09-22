/**
|--------------------------------------------------
| Contact routes
|--------------------------------------------------
*/

const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contactController');

router.post('/', contactController.newContact );

module.exports = router;