import {Tarea} from './Tarea'

type ListaTareas = {
  listaTareas: string[]
  borrarTarea: (index:number) => void
}

export const ListaTareas = ({listaTareas,borrarTarea }: ListaTareas) => {
  return (
    <div className="taskList">
      {
        listaTareas.map((listaTareas, index) => (
           <Tarea key={index} tarea={listaTareas} borrarTarea={() => borrarTarea(index)}></Tarea>
        )
      )}
    </div>
  )
}