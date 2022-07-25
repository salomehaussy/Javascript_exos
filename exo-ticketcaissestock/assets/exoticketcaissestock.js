let stockboisson = 3;
let stockplat = 3;
let stocksupplement = 3; 


let prixboisson = prompt("prix de la boisson");
prixboisson = parseFloat(prixboisson);
console.log(typeof prixboisson);
// prixboisson = parseInt(prixboisson);
document.write(" prix boisson : ");
document.write(prixboisson);
document.write(" €");
document.write("<br />");

let quantiteboisson = prompt("quantité de la boisson");
document.write(" quantité boisson : ");
document.write(quantiteboisson);
document.write("<br />");
let stockboisson2 = stockboisson-quantiteboisson;
document.write("stock des boissons : ");
document.write(stockboisson2);
document.write("<br /><br />");

let prixplat = prompt("prix du plat");
document.write(" prix plat : ");
document.write(prixplat);
document.write(" €");
document.write("<br />");

let quantiteplat = prompt("quantité du plat");
document.write(" quantité boisson : ");
document.write(quantiteplat);
document.write("<br />");
let stockplat2 = stockplat-quantiteplat;
document.write("stock des plats : ");
document.write(stockplat2);
document.write("<br /><br />");

let prixsupplement = prompt("prix supplément");
document.write(" prix supplément : ");
document.write(prixsupplement);
document.write(" €");
document.write("<br />");

let quantitesupplement = prompt("quantité supplément");
document.write(" quantité supplément : ");
document.write(quantitesupplement);
document.write("<br />");
let stocksupplement2 = stocksupplement-quantitesupplement;
document.write(" stock des suppléments : ");
document.write(stocksupplement2);
document.write("<br />");
document.write("_________________________________");
document.write("<br /><br />");

let totalboisson = prixboisson * quantiteboisson;
document.write(" Total de vos boissons : ");
document.write(totalboisson.toFixed(2));
document.write(" €");
document.write("<br />");

let totalplat = prixplat * quantiteplat;
document.write(" Total de vos plats : ");
document.write(totalplat.toFixed(2));
document.write(" €");
document.write("<br />");

let totalsupplement = prixsupplement * quantitesupplement;
document.write(" Total de vos supplement : ");
document.write(totalsupplement.toFixed(2));
document.write(" €");
document.write("<br />");
document.write("_________________________________");
document.write("<br /><br />");

let montantht = parseFloat(totalboisson)+parseFloat(totalplat)+parseFloat(totalsupplement);
document.write(" Montant HT : ");
document.write(montantht.toFixed(2));
document.write(" €");
document.write("<br />");

let tva = montantht/100*10;
document.write(" TVA 10% : ");
document.write(tva.toFixed(2));
document.write(" €");
document.write("<br />");

let TTC = parseFloat(montantht)+parseFloat(tva)
document.write(" TTC : ");
document.write(TTC.toFixed(2));
document.write(" €");
document.write("<br />");