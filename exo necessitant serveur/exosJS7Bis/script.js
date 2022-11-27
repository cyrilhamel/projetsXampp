let b = document.body;
let newH1 = document.createElement("h1");

newH1.textContent = "Je suis le titre H1";
b.prepend(newH1);

let div = document.createElement("div");
newH1.after(div);

let newH2 = document.createElement("h2");
newH2.textContent = "Je suis le titre H2";
div.prepend(newH2);

let newP1 = document.createElement("p");
newP1.textContent = "Je suis le 2nd paragraphe";
div.append(newP1);

let newP2 = document.createElement("p");
newP2.textContent = "Je suis le 3e paragraphe";
div.append(newP2);

let newList = document.createElement ("ul")
newList.innerHTML = "<li>ListeItem1</li><li>ListeItem2</li><li>ListeItem3</li><li>ListeItem4</li><li>ListeItem5</li>"
div.append(newList);
