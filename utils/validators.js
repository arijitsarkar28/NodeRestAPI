const { body } = require('express-validator');
const User = require('../models/user');

const postValidators = [
  body('title').trim().isLength({ min: 5 }),
  body('content').trim().isLength({ min: 5 }),
  //body("image").trim().isURL(),
];

const signupValidators = [
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email.')
    .custom((value) => {
      return User.findOne({ email: value }).then((userDoc) => {
        if (userDoc) {
          return Promise.reject('E-mail exists already, please pick a different one.');
        }
      });
    })
    .normalizeEmail(),
  body('password').trim().isLength({ min: 5 }),
  body('name').trim().not().isEmpty(),
];

const updateStatusValidators = [body('status').trim().not().isEmpty()];

module.exports = {
  postValidators,
  signupValidators,
  updateStatusValidators,
};
