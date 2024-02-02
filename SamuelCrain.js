function createSamButton() {
    var samButton = document.createElement("button");
    var samButtonText = document.createTextNode("Sam's Button");
    samButton.appendChild(samButtonText);
    samButton.addEventListener("click", function(){
        alert("You clicked Sam's button!");
    });
    document.body.appendChild(samButton);
}
