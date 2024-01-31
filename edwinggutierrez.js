let height = 50; 
let length = 100; 

const colors = [
    "red", "orange", "yellow", "green", "blue"
]

function eg(){
    let rand = Math.floor(Math.random() * colors.length); 
    let color = colors[rand]; 


    document.getElementById("btn").style.height = height += 10; 
    document.getElementById("btn").style.width = length += 10; 
    document.getElementById("btn").style.backgroundColor = color; 
}
