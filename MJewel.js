function funButton()
{
document.write("</br></br>");
var btn = document.createElement("button");
btn.innerHTML = "Click ME!";
btn.style.width = 100;
btn.style.height = 50;
btn.addEventListener("click", function()
{
  btn.innerHTML = "Matthew Jewel"
  document.body.style.backgroundColor = "Salmon";
})
document.body.appendChild(btn);

}
