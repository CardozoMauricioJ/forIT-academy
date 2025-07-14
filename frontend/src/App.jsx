import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TaskList from "./componentes/TaskList";
import TaskForm from "./componentes/TaskForm";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="w-100" style={{ maxWidth: '600px' }}>
          <div className="text-center mb-4">
          <h1>Administrador de Tareas</h1>
          <Link to="/crear" className="btn btn-primary mt-2">
            + Nueva Tarea
          </Link>
          </div>

        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/crear" element={<TaskForm />} />
          <Route path="/editar/:id" element={<TaskForm />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;