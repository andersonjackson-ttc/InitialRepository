function createListWithButton() {
  // Create a list
  var myList = document.createElement("ul");

  // Add items to the list
  var items = ["Item 1", "Item 2", "Item 3"];
  items.forEach(function (itemText) {
    var listItem = document.createElement("li");
    listItem.textContent = itemText;
    myList.appendChild(listItem);
  });

  // Add a button
  var myButton = document.createElement("button");
  myButton.textContent = "Change Font Color";

  // Change font color when the button is clicked
  myButton.addEventListener("click", function () {
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    myList.style.color = randomColor;
  });

  // Append the button to the list
  myList.appendChild(myButton);

  // Append the list to the body of the document
  document.body.appendChild(myList);
}

// Call the function
createListWithButton();