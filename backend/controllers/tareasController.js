const tareas = require('../data/tareasData');

// GET: mostrar Tareas
const getTareas = (req, res) => {
    res.json(tareas);
}

// POST: agregar Tarea
const addTarea = (req, res) => {
    const { titulo, descripcion } = req.body;
    
    const newTarea = {
        id: Math.random().toString(36).substring(2,9),
        titulo,
        descripcion,
        completada: false,
        creacion: new Date()
    }

    tareas.push(newTarea);
    res.status(201).json(newTarea);
}

// PUT: actualizar tarea por id
const updateTarea = (req, res) => {
    const { id } = req.params;
    const index = tareas.findIndex(t => t.id === id);

    if (index === -1) return res.status(404).json({ error: 'Tarea no encontrada'});
    

    tareas[index] = { 
        ...tareas[index], 
        ...req.body 
    }
    res.json(tareas[index]);
}

//DELETE: Eleminar tarea por id
const deleteTarea = (req, res) => {
    const { id } =req.params;
    const index = tareas.findIndex(t => t.id === id);

    if (index === -1) return res.status(404).json({ error: 'Tarea no encontrada'});
    

    const eliminada = tareas.splice(index, 1);
    res.json({ mensaje: 'Tarea eliminada', eliminado: eliminada[0] });
}

module.exports = {
    getTareas,
    addTarea,
    updateTarea,
    deleteTarea
}