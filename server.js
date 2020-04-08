const express = require('express'); // importing a CommonJS module
const helmet = require('helmet')
const morgan = require('morgan');

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

//built-in middleware
server.use(express.json());


//third-party middleware
server.use(helmet())
// server.use(morgan('dev'))


//custom middleware
server.use(methodLogger)
server.use(addName)
// server.use(lockout)
// server.use(conditionalLockout)


server.use('/api/hubs', hubsRouter);

//endpoint
server.get('/', (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

function methodLogger(req, res, next) {
  console.log(`${req.method} Request`)
  next();
}

function addName(req, res, next) {
  req.name = req.name || 'Vanshika'
  next();
}

function lockout(req, res, next) {
  res.status(403).json({ message: 'api lockout in force' })
}

function conditionalLockout(req, res, next) {
  var seconds = new Date().getSeconds();
  if(seconds % 3 == 0){
    res.status(403).json({ message: 'try again' })
  } else {
    next();
  }
}

// error handler function at last
server.use((error, req, res, next) => {
  res.status(400).json({ message: 'Bad Request', error })
})

module.exports = server;
