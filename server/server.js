const express = require('express');
const app = express();
const cors = require('cors');


// MIDDLEWARE
app.use(cors());

//ROUTES
const todoRouter = require('./src/routes/todo_routes');
app.use('/todos', todoRouter);

// PORT
const port = 5000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})