type Tarea = {
  tarea: string
  borrarTarea: () => void
}

export const Tarea = ({tarea, borrarTarea}: Tarea ) => {

  return (
    <div className="task">
      <label className="custom-checkbox">
      <input type="checkbox"/>
      <span className="checkmark"></span>
      <span className="task-text">{tarea}</span>
    </label>
      <button className="delete-btn" onClick={borrarTarea}>Borrar</button>
    </div>
  )
}