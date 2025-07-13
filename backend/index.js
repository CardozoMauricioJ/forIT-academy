const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

// Rutas
const tareasRoutes = require('./routes/tareas');
app.use('/api/tareas', tareasRoutes);


// Iniciar servidor
app.listen(3000, () => {
    console.log('El servidor corre en el puerto http://localhost:3000');
    
});