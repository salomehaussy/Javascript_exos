function afficher() {
    let number = document.getElementById("nametext").value;
    console.log (`le nombre est ${number}`);
    console.log (`le nombre est ${number*number}`);
   document.getElementById("resultat").innerHTML = number*number;
}

 