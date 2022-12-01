// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
let compteur=0;
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.setAttribute('id','tache'+compteur)
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  let texte = document.getElementById("myInput").value;

  document.cookie = "tache"+compteur+"="+texte;
  console.log(document.cookie);

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }

  compteur++;
}

function valeur(){
  let cookies = document.cookie;
  let tab = cookies.split("; ");
  console.log(tab);
  let tab2 = [];
  for(i=0; i<tab.length; i++){
    let temp = tab[i].split("=")
    tab2.push(temp[0]);
    tab2.push(temp[1]);
  }

  console.log("tab2 : "+tab2);
  let tab3 = [];
  for(i=0; i<tab2.length; i++){
    // console.log(tab2[i]);
    if(tab2[i].includes("tache")){
      tab3.push(tab2[i]);
      tab3.push(tab2[i+1]);
      let toto = document.createElement('li');
      toto.setAttribute('id',tab2[i]);
      toto.innerHTML = tab2[i+1];
      toto.innerHTML += "<button class=close>X</button>";
      list.appendChild(toto);
    }
  }
  console.log("tab 3: "+tab3);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
console.log("close : "+close);
// let i;
for (i = 0; i < close.length; i++) {
  console.log("début du for");
  close[i].onclick = function() {
    let divs = this.parentElement;
    divs.remove();
    //reste à supprimer le cookie correspondant
  }
}