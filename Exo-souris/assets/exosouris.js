const box = document.querySelector(".box");
const pageX = document.getElementById("x");
const pageY = document.getElementById("y");

function updateDisplay(event) {
  //fonction élément
  pageX.innerText = event.pageX; //afficher l'axe X de la souris
  pageY.innerText = event.pageY; //afficher l'axe Y de la souris
}


box.addEventListener("mousemove", updateDisplay, false);
box.addEventListener("mouseenter", updateDisplay, false);
box.addEventListener("mouseleave", updateDisplay, false); //enregister la fonction updateDisplay en tant que gestionnaire d'évènement (mousemove)
