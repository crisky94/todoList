type Tarea = {
  tarea: string
  completada: boolean;
  borrarTarea: () => void
  toggleCompletada: () => void; 
}

export const Tarea = ({tarea, borrarTarea, completada, toggleCompletada}: Tarea ) => {

  return (
    <div className="task">
      <label className="custom-checkbox">
      <input type="checkbox"
          checked={completada} 
          onChange={toggleCompletada} 
        />
      <span className="checkmark"></span>
      <span className="{`task-text ${completada ? 'completed' : ''}`}">{tarea}</span>
    </label>
      <button className="delete-btn" onClick={borrarTarea}>Borrar</button>
    </div>
  )
}
