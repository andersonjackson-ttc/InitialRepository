function displayRandomNumber() // Antonio Grajeda
{
    var rng = Math.floor(Math.random() * 6);
    document.getElementById("diceDisplay").innerHTML = rng;
}