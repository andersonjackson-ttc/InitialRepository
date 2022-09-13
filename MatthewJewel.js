		<script>
		function funPage()
		{
			document.write(	'<body id="body">' +
					'<h1> Event Handlers At Work!</h1>' +
					'<h2>By <i>Matthew Jewel</i></h2>' +
					'<ol type="a">' +
						'<li><a href="https://www.google.com" id="search">Search Here</a></li>' +
						'<li><form><input type="button" value="Click Me!" onclick="window.alert(' + 'You Clicked The Button!' + ');"></form></li>' +
						'<li><form>My name is<input type="text" id="name" value="Sam">Go ahead, change my name</form></li>' +
						'<li><form><input type="button" value = "Reload" onclick="window.location.reload(true)"></form></li>' +
						'<li><form><input type="button" id="linkSite" value="My Favorite Site"></form></li>' +
					'</ol>');
			var myLink = document.getElementById("search");
			var body = document.getElementById("body");
			var nameElement = document.getElementById("name");
			var linkSite = document.getElementById("linkSite");
			myLink.onmouseover = function(){body.style.backgroundColor = "green";}
			myLink.onmouseleave = function(){body.style.backgroundColor = "white";}
			nameElement.onblur = function(){alert("Name Was Changed To: " + nameElement.value);}
			linkSite.onclick = function(){window.open('http://nso.matthewjewel.com', '_blank');}
		}
		</script>