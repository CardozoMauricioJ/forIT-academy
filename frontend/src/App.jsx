import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TaskList from "./componentes/TaskList";
import TaskForm from "./componentes/TaskForm";

function app() {
  return (
    <BrowserRouter>
      <div className="container mt-4">
        <nav className="mb-4 d-flex justify-content-between">
          <h2>Administrador de Tareas</h2>
          <Link to="/crear" className="btn btn-primary">
            + Nueva Tarea
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/crear" element={<TaskForm />} />
          <Route path="/editar/:id" element={<TaskForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default app;