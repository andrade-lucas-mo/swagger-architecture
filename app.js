// Require
const express = require('express');
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const app = express();

// Base routes
const band = require('./routes/band')

// Define the express format
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Define cors options
const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
app.use((req, res, next) => {
    app.use(cors(corsOptions))
    next();
})

// Documentation Swagger
const swaggerDocument = require('./docs');
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Use base routes
app.use('/band', band);

app.use((req, res, next) => {
    const error = new Error('Route Not Found');
    error.status = 404;
    next(error)
})
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        status: error.status || 500,
        message: error.message,
        data : error.data || null
    });
})

module.exports = app;