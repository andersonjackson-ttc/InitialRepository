function createList() {
   var items = ["Item 1", "Item 2", "Item 3", "Item 4"];
   var container = document.getElementById("list-container");
   var ul = document.createElement("ul");
    items.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
  
    container.appendChild(ul);
}

document.addEventListener("DOMContentLoaded", function() {
    createList();
});
