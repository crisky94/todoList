type Tarea = {
  tarea: {
    texto: string;
    completada: boolean;
  };
  toggleCompletada: () => void;
  borrarTarea: () => void;
}

export const Tarea = ({tarea, borrarTarea, completada, toggleCompletada}: Tarea ) => {

  return (
    <div className="task">
      <label className="custom-checkbox">
      <input type="checkbox"
          checked={tarea.completada}
          onChange={toggleCompletada} 
        />
      <span className="checkmark"></span>
      <span className="{`task-text ${completada ? 'completed' : ''}`}">{tarea}</span>
    </label>
      <button className="delete-btn" onClick={borrarTarea}>Borrar</button>
    </div>
  )
}
