// Get all input fields
const inputs = document.querySelectorAll('.longitudes-input');
const abCoordinatesKeyboard = document.getElementById('abcoordinates-keyboard');
abCoordinatesKeyboard.style.display = 'none';
// Initialize the keyboard plugin for the first input field
$('#abcoordinates-keyboard').jkeyboard({
    input: $('#' + inputs[0].id), // Pass the first input field
    layout: 'special'
});

// Add focus event listener to each input field
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        // Update the input target for the keyboard plugin to the currently focused input field
        $('#abcoordinates-keyboard').jkeyboard('setInput', '#' + this.id);
        abCoordinatesKeyboard.style.display = 'block';
    });
});

const inputs2 = document.querySelectorAll('.latitudes-input');

// Initialize the keyboard plugin for the first input field
$('#abcoordinates-keyboard').jkeyboard({
    input: $('#' + inputs2[0].id), // Pass the first input field
    layout: 'special'
});

// Add focus event listener to each input field
inputs2.forEach(input => {
    input.addEventListener('focus', function() {
        // Update the input target for the keyboard plugin to the currently focused input field
        $('#abcoordinates-keyboard').jkeyboard('setInput', '#' + this.id);
        abCoordinatesKeyboard.style.display = 'block';
    });
});


function saveABCoordinates(){
    const longitudesA = document.getElementById('longitudesA');
    const latitudesA = document.getElementById('latitudesA');
    const longitudesB = document.getElementById('longitudesB');
    const latitudesB = document.getElementById('latitudesB');


    // grab the coordinats
    console.log(`Coordinates A: ${longitudesA.value} ${latitudesA.value}`);
    console.log(`Coordinates B: ${longitudesB.value} ${latitudesB.value}`);

    // Reset input
    longitudesA.value = '';
    latitudesA.value = '';
    longitudesB.value = '';
    latitudesB.value = '';
    // hide keyboard
    abCoordinatesKeyboard.style.display = 'none';
    // close modal box
    closeModal('enterab')
}