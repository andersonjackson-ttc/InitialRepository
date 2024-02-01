

function therapyScheduler() {
    // Create a list to display scheduled appointments
    const appointmentsList = document.createElement('ul');
    
    // Function to add a new appointment
    function addAppointment() {
        const newAppointment = prompt('Enter the details of the new appointment:');
        if (newAppointment) {
            const appointmentItem = document.createElement('li');
            appointmentItem.textContent = newAppointment;
            appointmentsList.appendChild(appointmentItem);
        }
    }

    // Add a button to add new appointments
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Appointment';
    addButton.addEventListener('click', addAppointment);

    // Add a checkbox to mark completed appointments
    const completionCheckbox = document.createElement('input');
    completionCheckbox.type = 'checkbox';
    completionCheckbox.addEventListener('change', () => {
        // Toggle font color based on completion status
        const color = completionCheckbox.checked ? 'green' : 'black';
        appointmentsList.style.color = color;
    });

    // Append the list, button, and checkbox to the body
    document.body.appendChild(appointmentsList);
    document.body.appendChild(addButton);
    document.body.appendChild(completionCheckbox);
}

// Call the therapyScheduler function when the page loads
therapyScheduler();