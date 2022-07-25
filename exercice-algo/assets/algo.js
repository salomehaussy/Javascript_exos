var mytableau = ["salomé","océane","karim","jimmy","benoît"];
var myetudiant = ["féderic", "grégory", "camille", "anthony","stéphane"];
var nb = mytableau.length

var ages = [56, 71, 21, 23, 45, 7, 20, 33, 8, 3];
var result = ages.filter (checkAdult);

console.log (mytableau);

console.log (mytableau.concat (myetudiant)); //fusion du tableau 

console.log (mytableau.sort ()); //trie 
console.log (myetudiant.reverse()); //trie inverse

console.log(mytableau.lastIndexOf("jimmy")); //indexof
console.log(myetudiant.lastIndexOf("camille")); //lastindexof 

console.log(mytableau.length +nb+ " karim" ); //nombre élément tableau 


for (var i = 0; i < mytableau.length; i++)
{
console.log("karim : " +mytableau[i]);
}

for (var nom in mytableau)
{
console.log("salomé : "+mytableau[nom]);
}

mytableau.push("karim"); //push

console.log (mytableau);

mytableau.shift (); //supprimé un élément 
console.log(mytableau)

last = mytableau.pop(); //pop
console.log(last)

mytableau.unshift("jimmy","benoît"); //unshift
console.log (mytableau);


function checkAdult(age)
{
  return age >= 18; //filtrer les âges 
}

console.log(result)



//var mytableau = [{nom :"Salomé", adresse:"mons" }, 
                // {nom:"Océane", adresse:"cousolre"}, 
                 //{nom: "Karim", adresse: "Lens"},
                 //{nom:"Jimmy", adresse: "lille"},
                 //{nom:"Benoît",adresse: "maubeuge"},
                 //{nom:"Fréderic",adresse: "louvroil"},
                 //{nom:"Grégory",adresse: "haumont" },
                 //{nom:"Camille",adresse: "lille" },
                 //{nom:"Anthony",adresse: "fourmis"},
                 //{nom:"Cédric",adresse: "valenciennes"},
                 //{nom: "Stéphane",adresse: "maubeuge"},
                 //{nom: "Perrine",adresse: "louvroil"},
                 //{nom:"Théo",adresse: "haumont"},
                 //{nom:"Outman",adresse: "fourmis"},
                 //{nom: "Alim",adresse:"lens" },
                 //{nom:"Zakaria", adresse: "paris"}];

    //console.log (mytableau)

//function estJimmy(prenom) {
  //return prenom.nom === "Jimmy";

//}

//console.log(mytableau.find(estJimmy));

// let cherche = mytableau.find(mot)
// console.log(cherche)
//for(var i = 0 ; i < mytableau.length; ++i){
// document.write (mytableau[i])
 //let recherche = mytableau.find("Salomé") 
// console.log(recherche)
//}