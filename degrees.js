let CurrentDegree;
// window.onload = () => {
// 	refreshDegree();
// }
function updateDegree(){
	const inputDegree = document.querySelector('.inputdegree');
	if(inputDegree){
		CurrentDegree = parseInt(inputDegree.value);
		if(!isNumber(CurrentDegree)){
			console.log(CurrentDegree);
			alert("Please input number!")
			CurrentDegree = 0;
		}
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

function isNumber(num){
	return /^\d+$/.test(num);
}