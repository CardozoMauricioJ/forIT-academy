const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();



app.use(cors());
app.use(express.json());

// Rutas
const tareasRoutes = require('./routes/tareas');
app.use('/api/tareas', tareasRoutes);


// Iniciar servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`El servidor corre en el puerto http://localhost:${port}`);
    
});