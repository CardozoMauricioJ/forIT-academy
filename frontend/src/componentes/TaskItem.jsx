function TaskItem({ tarea, onDelete }) {
  const handleDelete = () => {
    if (window.confirm('¿Estas seguro de eliminar esta tarea?')) {
        onDelete(tarea.id);
    }
  }
    
  return (
    <li 
    className={`card mb-3 ${
        tarea.completada ? 'border-success bg-light' : ''
        }`}
    >
      <div className="card-body d-flex justify-content-between align-items-start">
        <div>
          <h5 className="card-title">
            {tarea.titulo}
            {tarea.completada && (
                <span className="badge bg-success ms-2">Completada</span>
                )}
          </h5>
          <p className="card-text">{tarea.descripcion}</p>
        </div>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default TaskItem;