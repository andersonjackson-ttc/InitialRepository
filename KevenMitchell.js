function colorPrompt() {
    //sets color of div with id myDiv to color entered in prompt
    document.getElementById("colorBtn").setAttribute("style", "color:" +
    prompt("Please Enter a css accepted color.", "#FFFFFF")+";");

}
