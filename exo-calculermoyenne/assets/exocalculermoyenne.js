

function afficher(){
    let num1 = document.getElementById("valeur1").value;
    let num2 = document.getElementById("valeur2").value;
    let num3 = document.getElementById("valeur3").value;
    let num4 = document.getElementById("valeur4").value;
    let num5 = document.getElementById("valeur5").value;
    
    let resultat1 = parseFloat(num1)+parseFloat(num2)+parseFloat(num3)+parseFloat(num4)+parseFloat(num5);
    let resultat2 = resultat1/5;

    document.getElementById("result").innerHTML = `la moyenne est de ${resultat2.toFixed(2)}`;

}

//parsint = convertir une chaîne de caractère (string) en nombre entier 
//parsfloat = convertire une chaîne de caractère (string) en nombre à virgule 
// j'ai appris à additionné 5 variables en les convertissant en nombres à virgule grâce aux parseFloat. J'ai divisé le résultat en 5 