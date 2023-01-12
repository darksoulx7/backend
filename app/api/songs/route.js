const express = require('express');
const router = express.Router();
const  { getSongs }= require('./services');

router.get('/', getSongs);






module.exports = router;
