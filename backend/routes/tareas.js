const express = require('express');
const router = express.Router();
const { 
    getTareas,
    getTareaPorId, 
    addTarea,
    updateTarea,
    deleteTarea
} = require('../controllers/tareasController');

// Endpoints
router.get('/', getTareas);
router.post('/', addTarea);
router.get('/:id', getTareaPorId);
router.put('/:id', updateTarea);
router.delete('/:id', deleteTarea);

module.exports = router;