const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const jwt = require("jsonwebtoken");

const { getUserToken, requireAuth } = require("../auth");
//Imports database models
const db = require("../db/models");
const { User, ListUser, Pressure, Sugar } = db;
const { asyncHandler, handleValidationErrors } = require("../utils");

const userNotFoundError = (id) => {
    const err = Error(`User with id of ${id} could not be found.`);
    err.title = "User not found.";
    err.status = 404;
    return err;
};

//Checks to see if a username is provided
const validateFullName =
    check("userName")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a username");

//Checks to see if email and password are provided
const validateEmailAndPassword = [
    check("email")
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage("Please provide a valid email."),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a password.")
];

//get all users
router.get('/', (req, res) => {
  db.User.findAll({
    include: [{
      model: db.Pressure
    }, {
      model: db.Sugar
    }],
  })
  .then(data => {
    res.status(200).send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all the users."
    });
  });
  //res.send(users);
});

//Creates a new user and sends back a 201 status, along with the access_token
//and user_id
router.post(
  "/",
  validateFullName,
  validateEmailAndPassword,
  handleValidationErrors,
  asyncHandler(async (req, res) => {
      const { userName, firstName, lastName, email, password, age } = req.body;
      console.log(userName, email, password, firstName, lastName, age);
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);
      const user = await User.create({ userName, firstName, lastName, email, hashedPassword, age });
      console.log(user);
      const token = getUserToken(user);
      res.status(201).json({
          user: { ID: user.id, userName: user.userName },
          token
      });
  })
);

//Update a user's fullName and/or email
router.put('/:id', handleValidationErrors, asyncHandler(async (req, res, next) => {
  const { userName,
      email,
  } = req.body;

  const userId = parseInt(req.params.userID, 10);
  const user = await User.findByPk(userId);
  if (user) {
      await user.update({ userName, email });
      res.json(user);
  } else {
      next(userNotFound(userId));
  }
}));

//Delete a user's account
router.delete('/:id', asyncHandler(async (req, res, next) => {
  const userId = parseInt(req.params.userID, 10);
  const user = await User.findByPk(userId);
  if (user) {
      await user.destroy();
      res.status(204).end();
  } else {
      next(userNotFoundError(userId));
  }
}));

module.exports = router;