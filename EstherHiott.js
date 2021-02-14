function blah() {
    var button = document.createElement("button");
    button.innerHTML = "Press HERE";

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);
    button.addEventListener("click", function(){
    	alert("Esther was here!");
    });
}
