// Define a JavaScript function named 'changeColors'
function changeColors() {
    // Get the value entered in the text input field with ID 'color-input'
    var color = document.getElementById("color-input").value;

    // Get the reference to the checkbox element with ID 'font-color-checkbox'
    var checkbox = document.getElementById("font-color-checkbox");

    // Change the background color of the page to the entered color
    document.body.style.backgroundColor = color;

    // Check if the checkbox is checked
    if (checkbox.checked) {
        // If checked, change the font color to white
        document.body.style.color = "white";
    } else {
        // If not checked, revert to default font color
        document.body.style.color = "black";
    }
}

// Call the function when the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the reference to the button element with ID 'color-button'
    var button = document.getElementById("color-button");

    // Add event listener to the button to call the 'changeColors' function when clicked
    button.addEventListener("click", function() {
        changeColors();
    });
});
