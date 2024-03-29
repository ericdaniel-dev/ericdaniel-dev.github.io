let CurrentABline = 0;
// window.onload =  function(){
// 	loadABlineData();
// }
let InputABlineIsShow = false;
function showInputABline(){
	if(InputABlineIsShow){
		return;
	}
	const container = document.getElementById('ABline-content');
	container.innerHTML = "";
	InputABlineIsShow = true;
    const newABline = document.getElementById('new-ABline');
    const inputABDiv = document.createElement('div'); 
    const inputABline = document.createElement('input');
    const newABlineKeyboard = document.createElement('div');
    newABlineKeyboard.setAttribute('id', 'new-ABline-keyboard');
    newABlineKeyboard.style.display = 'none';
    inputABline.type = 'text';
    inputABline.classList.add('input-newABline');
    inputABline.placeholder = 'Enter new ABline';
    inputABline.addEventListener('focus', () => {
    	newABlineKeyboard.style.display = 'block';
    })
    const submitABline = document.createElement('button');
    submitABline.textContent = 'Add';
    submitABline.onclick = () => {
        addABline(inputABline.value);
       	InputABlineIsShow = false;
        newABline.innerHTML = "";
    };
    inputABDiv.appendChild(inputABline);
    inputABDiv.appendChild(submitABline);

    newABline.appendChild(inputABDiv);
    newABline.appendChild(newABlineKeyboard);
    $('#new-ABline-keyboard').jkeyboard({
	    input: $('.input-newABline'),
	    layout: 'special'
	});
}

function addABline(newABlineValue) {
    const storedABlineData = JSON.parse(localStorage.getItem("ABlineData")) || [];
    storedABlineData.push(newABlineValue);
    localStorage.setItem("ABlineData", JSON.stringify(storedABlineData));
    loadABlineData();
}
function deleteABline(){
	const StoredABlineData = JSON.parse(localStorage.getItem("ABlineData"));
	if(CurrentABline>=0  && CurrentABline<StoredABlineData.length){
		StoredABlineData.splice(CurrentABline, 1);
		localStorage.setItem("ABlineData", JSON.stringify(StoredABlineData));
		loadABlineData();
	}
	else{
		console.log("Error: Invalid index");
	}
}
function setCurrentABline(index){
	CurrentABline = index;
}
function selectABline(){
	// const ShowABline = document.getElementById('show-ABline');
	// ShowABline.innerHTML = JSON.parse(localStorage.getItem("ABlineData"))[CurrentABline];
	closeModal('selectab');
}
function storeInitABlineData(){
	const InitABlineData = ["ABline 1", "ABline 2", "ABline 3", "ABline 4", "ABline 5", "ABline 6"];
	localStorage.setItem("ABlineData", JSON.stringify(InitABlineData));
}
function loadABlineData(){
	if(localStorage.getItem("ABlineData")){
		const container = document.getElementById('ABline-content');
		const StoredABlineData = JSON.parse(localStorage.getItem("ABlineData"));
		let PreviousSelected = null;
		container.innerHTML = "";
		StoredABlineData.forEach((item, index) => {
			var divElement = document.createElement('div');
			divElement.innerHTML = `<img src="./assets/Tagar.svg" alt="tagar icon"/><div class="selections"><span>${item}</span></div>`;
			divElement.onclick = function(){
				setCurrentABline(index);
				if(PreviousSelected){
					PreviousSelected.classList.remove('ABline-selected');
				}
				divElement.classList.add('ABline-selected');
				PreviousSelected = divElement;
			}
			container.appendChild(divElement);
		})
		// const ShowABline = document.getElementById('show-ABline');
		// ShowABline.innerHTML = JSON.parse(localStorage.getItem("ABlineData"))[CurrentABline];
	}
	else{
		storeInitABlineData();
		loadABlineData();
	}
}