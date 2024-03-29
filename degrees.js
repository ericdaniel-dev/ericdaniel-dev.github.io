let CurrentDegree;
const inputDegree = document.querySelector('.inputdegree');
const keyboardDegree = document.getElementById('inputdegree-keyboard');
keyboardDegree.style.display = 'none';
function updateDegree(){
	if(inputDegree){
		CurrentDegree = parseInt(inputDegree.value);
		if(!isNumber(CurrentDegree)){
			console.log(CurrentDegree);
			alert("Please input number!")
			CurrentDegree = 0;
		}
		refreshDegree();
		inputDegree.value = '';
		keyboardDegree.style.display = 'none';
		closeModal('enterdegrees');
	}
	else{
		alert('Input degree!');
	}
	const modalBox = document.querySelector('#modal-degree');
	modalBox.style.top = '50%';
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

inputDegree.addEventListener('focus', () => {
	const modalBox = document.querySelector('#modal-degree');
	keyboardDegree.style.display = 'block';
	modalBox.style.top = '20%';
})
$('#inputdegree-keyboard').jkeyboard({
    input: $('#inputdegree'),
    layout: 'special'
});