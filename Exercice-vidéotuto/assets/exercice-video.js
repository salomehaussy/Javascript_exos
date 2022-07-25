const PI = 3.14 //const = variable qui ne bouge pas 
 document.write(PI);
 
 let age = 14 // = est un opérateur d'affectation 
              // opérateur aritmetique + - * / % => modulo  (le reste d'une division)
              // opérateur aritmetique avec une affectation += -= *= /= %= 
              // ++ -- N++ (poste incrémentation) ou ++N (près incrémentation) N-- ou --N 
let N = 5;
N = N + 1; //N += 1
N = N - 2; //N-= 2
document.write (N)

//N++ -> N = N+1; -> N+1 
// ++N -> N+1 -> N=N

// opérateur de comparaison  <, >, <=, >=
// opérateur == (pour le égal), === (vérifie l'égalité et l'égalité du type)
// opérateur de différence !=, !== 


let names = "Yuna";  //if condition ()=> 

if(names === "Yuna") 
{
    document.write ("oui");
    let number = 6 

    if(number === 6)
    document.write("OUI")
              
}
else 
{
    document.write ("non");
}