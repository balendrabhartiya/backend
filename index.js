const express = require("express");    
const app = express();
app.use(express.json());
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


const cors = require("cors");
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }
));

const dotenv = require("dotenv");      // 3
dotenv.config();

const adminRoute = require('./Routes/adminRoute');
const admincategory_route=require('../server/Routes/AdmincategoryRoute')
app.use('/', adminRoute);
app.use('/',admincategory_route)



///////////////////////////////////////////////////////////SWAGGER////////////////////////////////////////////////////////////////


const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'NODE JS API DOCUMENTATION BY BALEDRA BHARTI',
        version: '1.0.0',
      },
      servers: [
        {
          url: 'http://localhost:4000', 
        },
      ],
    },
    apis: ['./Routes/adminRoute.js'],  // Path to your route file
  };
  
  const swaggerDocs = swaggerJsdoc(swaggerOptions);
  
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  const adminroll_route = require('./Routes/AdminRoleRoute');
  app.use('/', adminroll_route);

  const roleassignRoute = require('./Routes/AdminRoleAssignRoute');
app.use('/', roleassignRoute);

const port = 4000
app.listen(port, () => {
    console.log(`Server is running on ${port} Port`)
});




 