

function afficher()
{
    let num1 = document.getElementById("valeur1").value;
    let num2 = document.getElementById("valeur2").value; 
    let total = num1*num2;

    document.getElementById("result").innerHTML = `la superficie du rectangle est de ${total} m²`;

}

//j'ai appris à multiplier deux variable 