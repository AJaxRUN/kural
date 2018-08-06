const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

const path = require('path');
router.get('/', (req, res) => {
    res.render('register');
});

router.post('', (req, res) => {
    const userid = req.body.userid;
    const door = req.body.door;
    const street = req.body.street;
    const area = req.body.area;
    const pincode = req.body.pincode;
    const state = req.body.state;
    const city = req.body.city;
    const password = req.body.password1;

    const newUser = new User({
        userID: userid,
        address: '#' + door + ', ' + street + ', ' + area + '. ' + city + '-' + pincode + '. ' + state + '.',
        password: password
    });

    User.createUser(newUser, (err, user) => {
        if(err) throw err;
        console.log(user);
    });
    res.send('registered successfully');
});

module.exports = router;