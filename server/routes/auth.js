const express = require('express')

const {singup,login} = require('../controllers/auth.js')

const router= express.Router();

router.post('/singup',singup);
router.post('/login',login)

module.exports=router;