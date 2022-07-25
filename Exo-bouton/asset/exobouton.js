// Formulaire + Date
document.getElementById("button_date").addEventListener("click", myFunction); // ecouteur du bouton click

function myFunction(event) {
  event.preventDefault();
  let prenom = document.getElementById("prenom").value;
  let nom = document.getElementById("nom").value;
  document.getElementById("nom_prenom").innerHTML = (`le nom et prénom est ${prenom}  ${nom}`);
  document.getElementById("date").innerHTML = Date(); //afficher la date



}

const box = document.querySelector(".mouseover"); 
const pageX = document.getElementById("x");
const pageY = document.getElementById("y");

function updateDisplay(event) { //fonction élément
  pageX.innerText = event.pageX; //afficher l'axe X de la souris 
  pageY.innerText = event.pageY; //afficher l'axe Y de la souris 
}

box.addEventListener("mousemove", updateDisplay, false); //enregister la fonction updateDisplay en tant que gestionnaire d'évènement (mousemove)
box.addEventListener("mouseenter", updateDisplay, false); 
box.addEventListener("mouseleave", updateDisplay, false);




/*
const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e) => { //c'est le mouvement de la sourie / le e = evènement (la data des evènement)
    console.log(e);  //page X et Page Y = l'emplacement de la sourie 
    mousemove.style.left = e.pageX + "px"; // le chiffre dynamique (page X) + px
    mousemove.style.top = e.page + "px";
})*/

$ git remote add origin git@github.com:br1o/Basics.git
