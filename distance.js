let CurrentDistance;
const distanceInput = document.getElementById('newdistance');
const keyboardContainer = document.getElementById('newdistance-keyboard');

function storeDistance(){
	if(localStorage.getItem("distance")){
		if(CurrentDistance==null){
			CurrentDistance = 0;
		}
		localStorage.setItem("distance", CurrentDistance);
	}
	else{
		CurrentDistance = 0;
		localStorage.setItem("distance", CurrentDistance);
	}
}
function refreshDistance(){
	storeDistance();
	const ShowDistance = document.getElementById("show-distance");
	ShowDistance.innerHTML = localStorage.getItem("distance");
}

function changeDistance(){
	const newDistances = document.getElementById('newdistance');
	CurrentDistance = newDistances.value;
	refreshDistance();
	// close keyboard
	keyboardContainer.style.display = 'none';
	const modalBox = document.querySelector('#modal-distance');
	modalBox.style.top = '50%';
	closeModal('distancemodal');
}
function changeNthChildStyling(line, n, style) {
    const span = line.querySelector(`span:nth-child(${n})`);
    if (span) {
        span.style.borderLeft = style;
    }
}

$(document).ready(function() {
	// Attach the jkeyboard plugin to the input field
	$('#newdistance-keyboard').jkeyboard({
	    input: $('#newdistance'),
	    layout: 'special'
	});
	const modalBox = document.querySelector('#modal-distance');
	// Initially hide the keyboard container
	keyboardContainer.style.display = 'none';

	distanceInput.addEventListener('focus', () => {
	    // Show the keyboard container when the input field gains focus
	    modalBox.style.top = '20%';
	    keyboardContainer.style.display = 'block';
	});
});