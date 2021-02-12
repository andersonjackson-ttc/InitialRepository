function travis_function() {
    var colorList = new Array("purple", "green", "red", "orange", "yellow", "black", "blue", "pink");
    var color = colorList[Math.floor(Math.random() * colorList.length)];

    document.getElementById("myDiv").style.color = color;
}
