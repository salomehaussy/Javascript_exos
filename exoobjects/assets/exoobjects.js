const etudiant = {nom: "haussy", prenom: "salomé", date: "30/03/1989",

fullName: function () {
    return this.nom + " " + this.prenom + " " + this.date;
}}

document.getElementById("demo").innerHTML = etudiant.fullName() // mettre le . de la fonction

//document.getElementById("demo").innerHTML = "le nom de l'étudiant est " + etudiant.nom; récupéré l'objet 
//document.getElementById("demo2").innerHTML = "le prénom de l'étudiant est " + etudiant.prenom;
//document.getElementById("demo3").innerHTML = "la date de naissance de l'étudiant est " + etudiant.date;