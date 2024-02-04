// seferinoSierra.js
function addCheckbox() {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "myCheckbox";

    var label = document.createElement("label");
    label.htmlFor = "myCheckbox";
    label.appendChild(document.createTextNode("My Checkbox"));
    document.body.appendChild(checkbox);
    document.body.appendChild(label);
}

window.onload = addCheckbox;
