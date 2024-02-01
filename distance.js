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
	changeBar();
	closeModal('distancemodal');
}
function changeBar() {
    const lines = document.querySelectorAll('#middle .line');

    lines.forEach((line, index) => {
        if (CurrentDistance <= 2) {
            changeNthChildStyling(line, 1, '15px dashed var(--greendot)');
            changeNthChildStyling(line, 2, '15px dashed var(--greendot)');
            changeNthChildStyling(line, 3, '15px dashed var(--greendot)');
        } else if (CurrentDistance <= 3) {
            changeNthChildStyling(line, 1, '15px dashed var(--orangedot)');
            changeNthChildStyling(line, 2, '15px dashed var(--greendot)');
            changeNthChildStyling(line, 3, '15px dashed var(--greendot)');
        } else if (CurrentDistance <= 6) {
            changeNthChildStyling(line, 1, '15px dashed var(--orangedot)');
            changeNthChildStyling(line, 2, '15px dashed var(--orangedot)');
            changeNthChildStyling(line, 3, '15px dashed var(--greendot)');
        } else if (CurrentDistance <= 9) {
            changeNthChildStyling(line, 1, '15px dashed var(--reddot)');
            changeNthChildStyling(line, 2, '15px dashed var(--orangedot)');
            changeNthChildStyling(line, 3, '15px dashed var(--orangedot)');
        } else if (CurrentDistance > 9) {
            changeNthChildStyling(line, 1, '15px dashed var(--reddot)');
            changeNthChildStyling(line, 2, '15px dashed var(--reddot)');
            changeNthChildStyling(line, 3, '15px dashed var(--reddot)');
        }
    });
}
function changeNthChildStyling(line, n, style) {
    const span = line.querySelector(`span:nth-child(${n})`);
    if (span) {
        span.style.borderLeft = style;
    }
}