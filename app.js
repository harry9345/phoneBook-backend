const config = require('./utils/config');
const express = require('express');
require('express-async-errors');
const app = express()
const cors = require('cors')
const notesRouter = require('./controllers/note');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');
const mongoose = require('mongoose');
const usersRouter= require('./controllers/users')
logger.info('connecting to : ', config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to mongo DB0');
  })
  .catch((error) => {
    logger.error('error connecting to mongo DB O: ', error.message);
  });


app.use(cors())
app.use(express.static('build'));
app.use(express.json())

app.use(middleware.requestLogger)

app.use('/app/notes', notesRouter);
app.use('/app/users', usersRouter)

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
