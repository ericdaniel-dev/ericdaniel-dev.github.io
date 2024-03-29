let CurrentField = 0;
// window.onload =  function(){
// 	loadFieldData();
// }
let InputFieldIsShow = false;
function showInputField(){
	if(InputFieldIsShow){
		return;
	}
	const container = document.getElementById('field-content');
	container.innerHTML = "";
	InputFieldIsShow = true;
    const newField = document.getElementById('new-field');
    const inputFieldDiv = document.createElement('div'); // Create a div to wrap input and button
    const inputField = document.createElement('input');
    const submitField = document.createElement('button');
    const keyboardVirtual = document.createElement('div');
    keyboardVirtual.setAttribute('id', 'new-field-keyboard');
    inputField.type = 'text';
    inputField.classList.add('input-newfield');
    inputField.placeholder = 'Enter new field';

    submitField.textContent = 'Add';
    submitField.onclick = () => {
        addField(inputField.value);
       	InputFieldIsShow = false;
        newField.innerHTML = "";
    };

    inputFieldDiv.appendChild(inputField); // Append input field to inputFieldDiv
    inputFieldDiv.appendChild(submitField); // Append submit button to inputFieldDiv

    newField.appendChild(inputFieldDiv); // Append inputFieldDiv to newField
    newField.appendChild(keyboardVirtual); // Append keyboardVirtual directly to newField

    // Initialize virtual keyboard
    $('#new-field-keyboard').jkeyboard({
        input: $('.input-newfield'),
        layout: 'special'
    });
}


function addField(newFieldValue) {
    const storedFieldData = JSON.parse(localStorage.getItem("FieldData")) || [];
    storedFieldData.push(newFieldValue);
    localStorage.setItem("FieldData", JSON.stringify(storedFieldData));
    loadFieldData();
}
function deleteField(){
	const StoredFieldData = JSON.parse(localStorage.getItem("FieldData"));
	if(CurrentField>=0  && CurrentField<StoredFieldData.length){
		StoredFieldData.splice(CurrentField, 1);
		localStorage.setItem("FieldData", JSON.stringify(StoredFieldData));
		return loadFieldData();
	}
	else{
		console.log("Error: Invalid index");
	}
}
function setCurrentField(index){
	CurrentField = index;
}
function selectField(){
	const ShowField = document.getElementById('show-field');
	ShowField.innerHTML = JSON.parse(localStorage.getItem("FieldData"))[CurrentField];
	closeModal('selectfield');
}
function storeInitFieldData(){
	const InitFieldData = ["Field 1", "Field 2", "Field 3", "Field 4", "Field 5", "Field 6"];
	localStorage.setItem("FieldData", JSON.stringify(InitFieldData));
}
function loadFieldData(){
	if(localStorage.getItem("FieldData")){
		const container = document.getElementById('field-content');
		const StoredFieldData = JSON.parse(localStorage.getItem("FieldData"));
		let PreviousSelected = null;
		container.innerHTML = "";
		StoredFieldData.forEach((item, index) => {
			var divElement = document.createElement('div');
			divElement.innerHTML = `<img src="./assets/Tagar.svg" alt="tagar icon"/><div class="selections"><span>${item}</span></div>`;
			divElement.onclick = function(){
				setCurrentField(index);
				if(PreviousSelected){
					PreviousSelected.classList.remove('field-selected');
				}
				divElement.classList.add('field-selected');
				PreviousSelected = divElement;
			}
			container.appendChild(divElement);
		})
		const ShowField = document.getElementById('show-field');
		ShowField.innerHTML = JSON.parse(localStorage.getItem("FieldData"))[CurrentField];
	}
	else{
		storeInitFieldData();
		return loadFieldData();
	}
}