function coreyFunction(){
    var checkBox = document.getElementById("coreyCheck");
    var text = document.getElementById("text");

    if (checkBox.checked == true){
        text.style.display = "block";
    }
    else{
        text.style.display = "none";
    }
}