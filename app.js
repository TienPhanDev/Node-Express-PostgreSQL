require('dotenv').config()
const Joi = require('joi');
const express = require("express");
const cors = require("cors");
const morgan = require('morgan');

const app = express();
const usersRouter = require('./routes/users');
const sugarsRouter = require('./routes/sugars');
const pressuresRouter = require('./routes/pressures');
const db = require("./db/models");

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(morgan("dev"));
app.use(cors());

app.use('/api/users', usersRouter);
//app.use('/api/sugars', sugarsRouter);
//app.use('/api/pressures', pressuresRouter);

// Catch unhandled requests and forward to error handler.
// app.use((req, res, next) => {
//     const error = new Error("The requested resource couldn't be found.");
//     error.status = 404;
//     next(error);
// });

// set port
const PORT = process.env.PORT || 8080;
// Check the database connection before starting the app.
db.sequelize
    .authenticate()
    .then(() => {
        console.log("Database connection success! Sequelize is ready to use...");
        // Start listening for connections.
        app.listen(PORT, () => console.log(`Server is live & Listening on port ${PORT}...`));
    })
    .catch((err) => {
        console.log("Database connection failure.");
        console.error(err);
    });