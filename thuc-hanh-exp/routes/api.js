var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var user_api=require('../controllers/api/user.api');


router.get('/user',user_api.list);
router.post('/user/login',user_api.login);
router.get('/user/login',user_api.login);
router.post('/user/dk',user_api.register);










module.exports = router;