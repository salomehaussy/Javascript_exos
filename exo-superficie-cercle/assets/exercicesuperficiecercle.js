

function afficher(){
    let num = document.getElementById("valeur1").value;
    const PI = 3.14;
    let num2 = num*num*PI;

    document.getElementById("result").innerHTML = `la superficie du cercle est de ${num2.toFixed(2)}`
    
}

//toFixed(2) = arrondir à 2 chiffres après la virgule 
// J'ai crée une variable const pour bloqué la valeur de la variable. J'ai appris que le toFixed(2) permet de mettre deux chiffres après la virgule. 
