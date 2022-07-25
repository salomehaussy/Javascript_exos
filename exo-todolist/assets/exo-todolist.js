//SELECTEUR
const todoInput = f[0] //La méthode querySelector() de l'interface Document retourne le premier Element dans le document correspondant au sélecteur - ou groupe de sélecteurs - spécifié(s), ou null si aucune correspondance n'est trouvée.
const todobutton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//ECOUTEURS
todobutton.addEventListener("click", addTodo); //pour cliquer sur le bouton 
todoList.addEventListener("click", deletCheck);
filterOption.addEventListener("input", filterTodo);

//FUNCTIONS

function addTodo(event){
  event.preventDefault(); // pour stopper le boutton

  //to do div
  const todoDiv = document.createElement("div"); // crée l'élément div
  todoDiv.classList.add("todo"); //ajouté une class

  //crée le Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo); //appendChild c'est la div enfant (on l'accroche le LI à la Div) 

  //ajouter la todo au localStorage 
  saveLocalTodos(todoInput.value); //pour sauvegardé la commande

  //bouton check
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn"); //Class pour ajouter au bouton
  todoDiv.appendChild(completedButton); //pour l'ammener dans la div bouton

  //bouton supp
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn"); 
  todoDiv.appendChild(trashButton); 

  //AJOUTER NOTRE TODO-LIST
  todoList.appendChild(todoDiv);
  todoInput.value ="";
}

function deletCheck (e){
  const item = e.target; //e.target C'est une référence à l'objet qui a envoyé l'événement
 //DELETE TODO
 if (item.classList[0] === "trash-btn"){
   const todo = item.parentElement;
   todo.classList.add("fall"); //ajouter du CSS pour l'éffet de rotation quand ça se supprime
  
   todo.addEventListener("transitionend", function(){ //crée une fonction pour que la case invisible se supprime
     todo.remove(); // supprimer la todo list
   })
 }

 //CHECK MARK 
 if(item.classList[0] === "complete-btn"){ 
   const todo = item.parentElement;
  todo.classList.toggle ("completed"); //validé le bouton 
 }
}

// Filter les input à faire, complété, toutes 
function filterTodo(e){
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";

        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex"; //afficher dans la case complété
        } else {
          todo.style.display = "none";
        }
        break;

      case "uncompleted":
        if (!todo.classList.contains("completed")) { // le ! est pour que ça soit dans la partie à faire 
          todo.style.display = "flex"; //afficher dans la case complété
        } else {
          todo.style.display = "none";
        }
        break;
    } 
  })

}


function saveLocalTodos(todo){
  //cherker si il y a des itemps existant
  let todos;
  if (localStorage.getItem["todos"] === null) {
    //s'il y n'y a rien
    todo = []; //crée un tableau qui sera vierge
  }

  else {
    todos = JSON.parse(localStorage.getItem("todos")) //récupéré les todo qui sera existant 
  }


  localStorage.setItem("todos",JSON.stringify(todos)); //permet d'afficher le contenue de la todo et de renvoyer le contenue du tableau 
}