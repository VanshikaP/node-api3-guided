// const express = require('express'); // importing a CommonJS module
// const helmet = require('helmet')
// const morgan = require('morgan');

// const hubsRouter = require('./hubs/hubs-router.js');

// const server = express();

// //built-in middleware
// server.use(express.json());

// //custom middleware
// server.use('/api/hubs', hubsRouter);

// //third-party middleware
// // const kicks = helmet()
// server.use(helmet())
// server.use(morgan('tiny'))

// //endpoint
// server.get('/', (req, res) => {
//   const nameInsert = (req.name) ? ` ${req.name}` : '';

//   res.send(`
//     <h2>Lambda Hubs API</h2>
//     <p>Welcome${nameInsert} to the Lambda Hubs API</p>
//     `);
// });

// module.exports = server;
