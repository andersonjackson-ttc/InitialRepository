function tylerTestFunction() {
	var theTyDivide = document.createElement("p");
	var tyText = document.createTextNode("Tyler was here");
	theTyDivide.appendChild(tyText);
	var tyElement = document.getElementById("tylerDiv");
	tyElement.appendChild(theTyDivide);
}