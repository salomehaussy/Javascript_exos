// Formulaire + Date
document.getElementById("button_date").addEventListener("click", myFunction); // ecouteur du bouton click

function myFunction(event) {
  event.preventDefault();
  let prenom = document.getElementById("prenom").value;
  let nom = document.getElementById("nom").value;
  document.getElementById("nom_prenom").innerHTML = (`le nom et prénom est ${prenom}  ${nom}`);
  document.getElementById("date").innerHTML = Date(); //afficher la date



}





/*
const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e) => { //c'est le mouvement de la sourie / le e = evènement (la data des evènement)
    console.log(e);  //page X et Page Y = l'emplacement de la sourie 
    mousemove.style.left = e.pageX + "px"; // le chiffre dynamique (page X) + px
    mousemove.style.top = e.page + "px";
})*/

//$ git remote add origin git@github.com:br1o/Basics.git
