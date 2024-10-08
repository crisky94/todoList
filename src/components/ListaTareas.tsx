import {Tarea} from './Tarea'

type ListaTareas = {
 listaTareas: {
    texto: string;
    completada: boolean;
  }[];
  borrarTarea: (index:number) => void
  toggleCompletada: (index: number) => void;
}

export const ListaTareas = ({listaTareas, borrarTarea, toggleCompletada }: ListaTareas) => {
  return (
    <div className="taskList">
      {
        listaTareas.map((listaTareas, index) => (
           <Tarea 
            key={index}
            tarea={listaTareas} 
            borrarTarea={() => borrarTarea(index)} 
            toggleCompletada={() => toggleCompletada(index)}/>
          
        )
      )}
    </div>
  )
}
