let CurrentDistance;

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
	closeModal('distancemodal');
}
function changeNthChildStyling(line, n, style) {
    const span = line.querySelector(`span:nth-child(${n})`);
    if (span) {
        span.style.borderLeft = style;
    }
}