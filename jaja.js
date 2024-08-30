
const novaTarefaInput = document.getElementById("novaTarefa");
const adicionarButton = document.getElementById("adicionar");
const listaTarefasUl = document.getElementById("listaTarefas");


function criarItem(tarefa, concluida = false) {
  const li = document.createElement("li");
  li.textContent = tarefa;
  if (concluida) {
    li.classList.add("concluida");
  }
  
  
  const concluirButton = document.createElement("button");
  concluirButton.textContent = "Concluir";
  concluirButton.classList.add("btn-concluir");
  concluirButton.addEventListener("click", () => {
    li.classList.toggle("concluida");
    salvarTarefas();
  });


  const excluirButton = document.createElement("button");
  excluirButton.textContent = "Excluir";
  excluirButton.classList.add("btn-excluir");
  excluirButton.addEventListener("click", () => {
    li.remove();
    salvarTarefas();
  });

  li.appendChild(concluirButton);
  li.appendChild(excluirButton);

  return li;
}


function adicionarTarefa() {
  const tarefa = novaTarefaInput.value.trim();
  if (tarefa) {
    const item = criarItem(tarefa);
    listaTarefasUl.appendChild(item);
    novaTarefaInput.value = "";
    salvarTarefas();
  }
}


function salvarTarefas() {
  const tarefas = [];
  listaTarefasUl.querySelectorAll("li").forEach(li => {
    tarefas.push({
      texto: li.firstChild.textContent,
      concluida: li.classList.contains("concluida")
    });
  });
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}


function carregarTarefas() {
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.forEach(tarefa => {
    const item = criarItem(tarefa.texto, tarefa.concluida);
    listaTarefasUl.appendChild(item);
  });
}


adicionarButton.addEventListener("click", adicionarTarefa);

carregarTarefas();