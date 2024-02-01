let CurrentDegree;
// window.onload = () => {
// 	refreshDegree();
// }
function updateDegree(){
	const inputDegree = document.getElementById('inputdegree');
	if(inputDegree){
		CurrentDegree = inputDegree.value;
		refreshDegree();
		inputDegree.value = '';
		closeModal('enterdegrees');
	}
	else{
		alert('Input degree!');
	}
}
function refreshDegree(){
	if(localStorage.getItem("degrees")){
		if(CurrentDegree==null){
			CurrentDegree = localStorage.getItem("degrees");
		}
		else{
			localStorage.setItem("degrees", CurrentDegree);	
		}
	}
	else{
		CurrentDegree = 0;
		localStorage.setItem("degrees", CurrentDegree);
	}
	const ShowDegree = document.getElementById('show-degree');
	ShowDegree.innerHTML = CurrentDegree;
}