const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const path = require('path');
router.get('/', (req, res) => {
    res.render('login', {
        error: false
    });
});

const User = require('../models/user.js');
router.post('', (req, res) => {
    const userid = req.body.userid;
    const password = req.body.password;

    User.findUser(userid, (err, user) => {
    	if(err)
    		throw err;
    	
    	if(user) {
    		User.comparePassword(password, user.password, (err, res1) => {
    			if(err)
    				throw err;

    		})
    	} else {
    		
    	}
    });
});

module.exports = router;