// Scripts for Student Table

// Variables
var i;
var rowIndex;
var hide = document.getElementsByClassName('infoRow');

// EventListener
for(i = 0; i < hide.length; i++) {
  hide[i].addEventListener("click", rowRemove); 
};

// Functions
function rowRemove() {
  for (var i = 0; i < hide.length; i++) {
    this.setAttribute("class", "hidden infoRow");
  }
};

