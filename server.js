const express = require('express');
const cors = require('cors') // This is new
const app = express();
const port = 8000;

// 1. Configures Mongoose
require("./server/config/mongoose.config")

// 2. Configures Express
app.use(cors()) // This is new
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

// 3. Allows Routes to be used with Express
const bookRoutes = require("./server/routes/pet.routes")
bookRoutes(app)

// 4. THe port where the server will be started on
app.listen(port, () => console.log(`EXPRESS SERVER RUNING ON ${port}`))

// WHEN STARTING APP NPM RUN START IN '/PET-SHELTER' TO START SERVER CONNECTION TO MONGODB
// THEN IN NEW TERMINAL CD CLIENT THEN NPM RUN START REACT APP