function funButton()
{
	document.write("<br><br>");
	var btn = document.createElement("button");
	btn.innerHTML = " Click Me";
	btn.style.width = 100;
	btn.style.height = 40;
	btn.addEventListener("click", function()
	{
		btn.innerHTML = "Thank You";
		document.body.style.backgroundColor = 'salmon'; 
	})
	document.body.appendChild(btn);
}
