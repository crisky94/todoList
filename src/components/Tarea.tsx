type TareaProps = {
  tarea: {
    texto: string;
    completada: boolean;
  };
  toggleCompletada: () => void;
  borrarTarea: () => void;
}

export const Tarea = ({tarea, borrarTarea, toggleCompletada}: TareaProps ) => {

  return (
    <div className="task">
      <label className="custom-checkbox">
      <input type="checkbox"
          checked={tarea.completada}
          onChange={toggleCompletada} 
        />
      <span className="checkmark"></span>
        <span className={`task-text ${tarea.completada ? 'completed' : ''}`}>
          {tarea.texto}
        </span>
    </label>
      <button className="delete-btn" onClick={borrarTarea}>Borrar</button>
    </div>
  )
}
