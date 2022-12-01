
document.cookie="nom=jean";
document.cookie="prenom=pierre";
 //1-créer une variable qui contient l'ensemble des cookies.
    //console.log (variable)

 //2-séparer la variable dans un tableau en séparant par ";".
    //console.log (tableau)
    //tab[0]="nom=jean"
    //tab[1]="nbVisites=2"
    //tab[2]="prénom=pierre"

//3-séparer chaque case du tableau par le = dans un nouveau tableau
    //console.log(tableau2)
    //tab2[0]="nbVisites"
    //tab2[1]="2"
    

//4-Récupérer la position de la clef
    //console.log(position clef)

//5-Récuperer la valeur dans tab2[position clef+1];
    //console.log (valeur NbVisites);

//6-Incrémente nbVisites et on réinsere dans le cookie
    //recharger la page

    function compteur(x){
    let infos=document.cookie;
    console.log(infos);
    let tab=infos.split("; ");
console.table(tab);
let tabT;
    for (i=0; i<tab.length;i++){
        tabT=tab[i].split("=");
        if (tabT[0].indexOf(x)>-1){
            return tabT[1] * 1;
        }
    }
    
}

let counter=1;
if (document.cookie.includes("nbVisit")){
    counter = compteur("nbVisit");
    counter++;
   
}
document.cookie="nbVisit="+ counter;
console.log(counter);

function reset(){
    let counter = 1
    document.cookie="nbVisit="+ counter;
}
function setup(){
let p = document.getElementsByTagName('p')[0];
p.style.color= "blue"; p.textContent=(counter);
}

