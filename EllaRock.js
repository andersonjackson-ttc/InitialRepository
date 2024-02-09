function ellasFunction() {

    const ellasButton = document.getElementById('ellasButton');

    ellasButton.addEventListener('click', function() {
        document.getElementById('ellasHeading').innerText = "BOO!"
        
    });

    document.getElementById("ellasHeading").style.color = "orange";
    document.getElementById("ellasHeading").style.fontSize = "50px";

}

