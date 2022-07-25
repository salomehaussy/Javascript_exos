function afficher() {
    let termes = document.getElementById("mots").value;
    let leTexte = document.getElementById("letexte").innerHTML;

    leTexte = leTexte.split('<span style="color:#411f1f; background-color:#c4a0a4e7;">').join("");//  \ pour préserver les doubles côtes. Mettre la couleur du surligneur
    leTexte = leTexte.split("</span>").join("");//méthode slip pour découper un texte sur l'occurence cherchée. méthode join permet de réunir tous les fragments pour reconstituer le contenue original 


if(termes!==""){ //il faut que le termes soit différent de rien du tout pour que ça fonctionne 
    let expReg = new RegExp(termes,"ig"); //variable de la RegExp pour le mettre dans l'iput 
    let formeRplcmt ="<span style='color:#411f1f; background-color:#c4a0a4e7;'>" +termes +"</span>"; //la variable pour mettre le mot en surligné 
    
    leTexte = leTexte.replace(expReg, formeRplcmt); // surligner les textes trouvés 
    document.getElementById("letexte").innerHTML = leTexte;
}
}