import { useEffect, useState } from 'react';
import TaskItem from './TaskItem';

const API_URL = import.meta.env.VITE_API_URL;

function TaskList() {
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    cargarTareas();
  }, []);

  const cargarTareas = () => {
    fetch('${API_URL}/tareas')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar tareas');
        return res.json();
      })
      .then((data) => setTareas(data))
      .catch((err) => setError(err.message));
  }

  const eliminarTarea = (id) => {
    fetch('${API_URL}/tareas/{id}', {
        method: 'DELETE',})
        .then(() => {
            setTareas(tareas.filter((t) => t.id !== id));
        })
        .catch((err) => setError(err.message));
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Lista de Tareas</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <ul className="list-unstyled">
        {tareas.map((tarea) => (
          <TaskItem key={tarea.id} tarea={tarea} onDelete={eliminarTarea} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;