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

// Function to add row
function rowAdd() {
  console.log("in rowAdd");
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var table = document.getElementsByTagName("tbody")[0];
  var newRowEl = document.createElement("tr");
  newRowEl.setAttribute("class", "visible inflow");
  newRowEl.setAttribute("data-visible", "true");
  newRowEl.innerHTML = "<td>" + firstName + "</td> \
                  <td>" + lastName + "</td> \
                  <td>" + email + "</td> \
                  <td><button type='button' class='btn btn-danger \ removeButton'><i class='fa fa-times'></i></button></td>";

  table.appendChild(newRowEl);

  setTimeout(function() {
    add.addEventListener("click", rowAdd);  
    console.log("added;");
  }, 1500);
  
  for (i = 0; i < hide.length; i++) {
    hide[i].addEventListener("click", rowRemove); 
  };
};

