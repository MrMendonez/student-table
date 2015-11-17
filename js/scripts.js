// Scripts for Student Table

// Variables
var i;
var rowIndex;
var hide = document.getElementsByClassName('removeButton');
var add = document.getElementById('addButton');


// Eventlistener for remove button
for (i = 0; i < hide.length; i++) {
  hide[i].addEventListener("click", rowRemove); 
};

// Function to remove row
function rowRemove() {
  this.parentNode.parentNode.setAttribute("class", "hidden infoRow");
};

// Eventlistener for add button
add.addEventListener("click", rowAdd);

//Function to add row
function rowAdd() {
  console.log('this');

}