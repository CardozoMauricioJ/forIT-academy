import { useNavigate } from "react-router-dom";

function TaskItem({ tarea, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('¿Estas seguro de eliminar esta tarea?')) {
        onDelete(tarea.id);
    }
  }

  const handleEdit = () => {
    navigate(`/editar/${tarea.id}`)
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
          <p className="text-muted mb-0">
            <small> {new Date(tarea.creacion).toLocaleString()}</small>
          </p>
        </div>

        <div className="d-flex flex-column gap-2">
            <button className="btn btn-primary btn-sm" onClick={handleEdit}>
                Editar
            </button>
            <button className="btn btn-danger btn-sm" onClick={handleDelete}>
            Eliminar
            </button>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;