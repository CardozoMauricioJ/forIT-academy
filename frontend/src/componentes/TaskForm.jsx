import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function TaskForm() {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [completada, setCompletada] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            fetch(`${API_URL}/tareas/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error('No se encontro la tarea');
                return res.json();
            })
            .then((data) => {
                setTitulo(data.titulo);
                setDescripcion(data.descripcion);
                setCompletada(data.completada);
            })
            .catch((err) => setError(err.message));
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const method = id ? 'PUT' : 'POST';
        const url = id ? `${API_URL}/tareas/${id}`
        : `${API_URL}/tareas`;

        fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo, descripcion, completada }),
        })
        .then(() => navigate('/'))
        .catch((err) => setError(err.message));
    }

    return (
        <div className="card p-4">
            <h3>{id ? 'Editar Tarea' : 'Nueva Tarea'}</h3>
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Título</label>
                    <input
                        type="text"
                        id="titulo"
                        className="form-control"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <textarea
                        id="descripcion"
                        className="form-control"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        rows="3"
                        required
                    ></textarea>
                </div>

                <div className="form-check mb-3">
                <input
                    type="checkbox"
                    id="completada"
                    className="form-check-input"
                    checked={completada}
                    onChange={(e) => setCompletada(e.target.checked)}
                />
                <label htmlFor="completada" className="form-check-label">Completada</label>
                </div>

                <button type="submit" className="btn btn-success">
                    {id ? 'Guardar Cambios' : 'Crear Tarea'}
                </button>
            </form>
        </div>        
    )

}

export default TaskForm;