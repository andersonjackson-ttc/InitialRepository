		//create button to take to fav website
		document.write("<p style='margin-left: 40px'>e. <input type='button' id='button3'value='My Favorite Site'></input></p>");

		document.getElementById("button3").addEventListener("click", function()
		{
			window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
		},false);