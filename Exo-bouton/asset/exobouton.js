// Formulaire + Date
document.getElementById("button_date").addEventListener("click", myFunction); // ecouteur du bouton click

function myFunction(event) {
  event.preventDefault();
  let prenom = document.getElementById("prenom").value;
  let nom = document.getElementById("nom").value;
  document.getElementById("nom_prenom").innerHTML = (`le nom et prénom est ${prenom}  ${nom}`);
  document.getElementById("date").innerHTML = Date(); //afficher la date



}

