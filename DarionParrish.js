function toggleCheckbox() {
    // Create a new checkbox
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'myCheckbox';

    // Replace the button with the checkbox
    document.getElementById('darionDiv').innerHTML = 'nice';
    document.getElementById('darionDiv').appendChild(checkbox);

  }
