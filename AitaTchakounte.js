function AitaFunction() {
    const AitaButton = document.getElementById('yourButton');

    AitaButton.addEventListener('click', function() {
        document.getElementById('AitaHeading').innerText = "Clicked!";
    });

    document.getElementById("AitaHeading").style.color = "pink";
    document.getElementById("AitaHeading").style.fontSize = "60px";
}
