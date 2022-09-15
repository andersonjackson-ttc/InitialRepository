function cBtn() {
    document.write("<br>")
    let btn = document.createElement("button");
    btn.innerHTML = "Don't Click Me";
    document.body.appendChild(btn);

    btn.addEventListener("click", function(){
        alert("Howdy, Cesar made this one");
    })

}
