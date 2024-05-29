const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PERN To-Do API",
      version: "1.0.0",
      description: "A project to practise PostgreSQL, Express, React, and Node",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["src/routes/*.js", "Swagger/swagger.yml"],
};

module.exports = swaggerOptions;