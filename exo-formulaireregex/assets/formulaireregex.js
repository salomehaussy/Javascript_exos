
let form = document.querySelector("#loginForm");

// Ecouter la modification de l'email 
form.email.addEventListener('change', function(){ //la fonction pour validé l'email
  validEmail(this);
}); 

// Ecouter la modification de password 
form.password.addEventListener('change', function(){ 
  validPassword(this);
}); 

//Ecouter la soumission du formulaire
form.password.addEventListener("submit", function (e) {
e.preventDefault();
if (validEmail(form.email) && validPassword(form.password)){
form.submit(); //on soumet l'email et le password
}

else{

}

}); 

// Validation de l'Email 

const validEmail = function (inputEmail) { // la fonction du RegExp 
  // création de la reg exp pour validation Email
    let emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g' //RexExp de l'adresse mail [a-z] => prend les minuscule [A-Z] => prend les Majuscule [0-9] => Prend les chiffres ^ => début $ => Fin [@]{1} => Retrouvé le @ 1 fois {2,10} => il y a entre 2 et 10 lettres 'g' => un flag qui permet de lire la Regexp
);

let testEmail = emailRegExp.test(inputEmail.value);
let small = inputEmail.nextElementSibling; // NexElementSibling -> attraper la balise qui est juste après 
 
if(testEmail){
 small.innerHTML = "Adresse valide" //si l'adresse mail est valide 
 small.classList.remove('text-danger'); 
 small.classList.add('text-success'); // change la couleur en vert
return true; // le mail est valide
}

 else {
    small.innerHTML = "Adresse n'est pas valide"; // sinon l'adresse mail n'est pas valide 
    small.classList.remove('text-success');
    small.classList.add('text-danger'); // change la couleur en rouge
 return false; //le mail n'est pas valide
}
};



//Validation du Password 

const validPassword = function (inputPassword) {
    let msg;
    let valid = false;
    // au moins 3 caractères 
    if (inputPassword.value.length < 3) {
      //si c'est inferieur à 3, on affiche que ça doit contenir 3 caractères
      msg = "le mot de passe doit contenir au moins 3 caractères";
    }
    // 1 Majuscule
    else if (!/[A-Z]/.test(inputPassword.value)) {
      //le ! C'est pour dire l'inverse. Sinon si le mot de passe doit contenir 1 majuscule
      msg = "le mot de passe doit contenir au moins une Majuscule";
    }
    // 1 Minuscule
    else if (!/[a-z]/.test(inputPassword.value)) {
      //le ! C'est pour dire l'inverse. Sinon si le mot de passe doit contenir 1 majuscule
      msg = "le mot de passe doit contenir au moins une Minuscule";
    }
    // Au moins 1 Chiffre
    else if (!/[0-9]/.test(inputPassword.value)) {
      //le ! C'est pour dire l'inverse. Sinon si le mot de passe doit contenir 1 majuscule
      msg = "le mot de passe doit contenir au moins un chiffre";
    }
    // mot de passe valide 

    else{
        msg = "mot de passe valide";
        valid = true
    }

    // Affichage 

    let small = inputPassword.nextElementSibling; 

    if (valid) {
      small.innerHTML = "Mot de passe valide"; //si l'adresse mail est valide
      small.classList.remove("text-danger");
      small.classList.add("text-success"); // change la couleur en vert
    return true;
    } else {
      small.innerHTML = msg; // sinon l'adresse mail n'est pas valide
      small.classList.remove("text-success");
      small.classList.add("text-danger"); // change la couleur en rouge
    return false;
    }
}



