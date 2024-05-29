const express = require('express');
const app = express();
const cors = require('cors');

// SWAGGER
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerOptions = require('./Swagger/swaggerOptions');
const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));


// MIDDLEWARE
app.use(cors());

//ROUTES
const todoRouter = require('./src/routes/todo_routes');
app.use('/todos', todoRouter);

// PORT
const port = 5000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});
   