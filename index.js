// Função para adicionar a tarefa
function addTask() {
// Aqui pegamos o valor digitado no input
   const taskTitle = document.querySelector('#taskTitle').value;
// Aqui dizemos que SE houver um valor, algo irá acontecer, senão não
   if(taskTitle) {
      const template = document.querySelector('.template');
//   O clone node copia o código referente aos elementos da tag selecionada
      const newTask = template.cloneNode(true);
//  Aqui adicionamos o titulo da tarefa
      newTask.querySelector('.task-title').textContent = taskTitle;
// Removendo classes desnecessárias depois de criado
      newTask.classList.remove('template');
      newTask.classList.remove('hide');
// Adiciona a tarefa na lista
      const list = document.querySelector('.task-list');
      list.appendChild(newTask);
// Limpa o campo
      document.querySelector('#taskTitle').value = " ";
// Removendo o elemento
// Estamos capturando o botão dentro da nova tarefa criada com o newTask
      const removeBtn = newTask.querySelector('.close-btn').addEventListener('click', function() {
// O this serve para se referir ao elemento atual, que está sendo clicado
        removeTask(this);
      })

// Adicionando o complete da tarefa 
      const completeBtn = newTask.querySelector('.done-btn').addEventListener('click', function() {

        completeToDo(this);

      })


   }

}

// Função para remover a tarefa
// Aqui o task está como parametro pois está se referindo ao this que se refere ao valor de newTask clicado
 function removeTask(task) {
// Aqui estamos dizendo para ser removido todo o nó do pai, portanto todo o li criado
    task.parentNode.remove(true);

 }

//  função para riscar o elemento completo

function completeToDo(task) {
// Aqui estamos guardando todo o valor do nó do pai numa variável
    const taskToComplete = task.parentNode;
// E aqui com o toggle estamos adicionando e retirando a classe done, conforme o numero de cliques
    taskToComplete.classList.toggle("done");
}




const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', function(e) {
// preventDefault para que o formulário não seja enviado
    e.preventDefault();
// Função criada acima que é chamada aqui quando a ação do clique inicia
    addTask();
})