
function tarefa(){
    let tarefas=["tarefa 1","tarefa 2","tarefa 3"];
    
    return (

       <div class="lista">
       <ul>
       {tarefas.map((l) => ( <li> {l}</li>))}
       </ul>
       </div>


    )
    
            }
export default tarefa;

  
            
