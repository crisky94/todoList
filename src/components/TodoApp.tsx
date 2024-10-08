import { useState } from "react"
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {
const [nuevaTarea, setNuevaTarea] = useState<string>('');
const [listaTareas, setListaTareas] = useState<string[]>([])

const handleAddTask = () => {
if(nuevaTarea.trim() === '') return
setListaTareas(tareaAnteriores => [...tareaAnteriores, nuevaTarea])
setNuevaTarea('')
}
const handleBorrarTarea = (index: number) => {
 setListaTareas(tareas => tareas.filter((_,i) => i !== index))
}
  return (
    <div className="app-container">
      <h1>Lista de Tareas</h1>
      <div>
        <input 
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva Tarea"
         />
         <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
    </div>
  )
}