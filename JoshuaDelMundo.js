function removeButton(){
  let btn = document.createElement("button")
  btn.innerHTML = "Remove button"
	document.body.appendChild(btn)
	btn.addEventListener("click", function(){
  	document.body.removeChild(btn);
	})
}