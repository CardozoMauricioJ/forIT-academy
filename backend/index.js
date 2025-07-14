require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();


const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas
const tareasRoutes = require('./routes/tareas');
app.use('/api/tareas', tareasRoutes);


// Iniciar servidor
app.listen(PORT, () => {
    console.log(`El servidor corre en el puerto http://localhost:${PORT}`);
    
});