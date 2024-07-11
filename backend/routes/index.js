const express = require('express');

const router = express.Router();

const userSignUpController = require('../controller/user/userSignUp');
const userSignInController = require('../controller/user/userSignIn');
const userDetailsController = require('../controller/user/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/user/userLogout');
const AllUser = require('../controller/user/AllUser');
const updateUser = require('../controller/user/updateUser');

router.post('/signup', userSignUpController);
router.post('/signin', userSignInController);
router.get('/user-details' ,authToken, userDetailsController);
router.get('/userLogout', userLogout);

// Admin panel routes
router.get('/all-users' , authToken, AllUser);
router.post('/update-user',authToken , updateUser);

module.exports = router