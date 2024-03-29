let CurrentField = 0;
// window.onload =  function(){
// 	loadFieldData();
// }
let InputFieldIsShow = false;
const newfield = document.getElementById('input-field-div');
newfield.style.display = 'none';
const keyboardField = document.getElementById('new-field-keyboard');
keyboardField.style.display = 'none';
$('#new-field-keyboard').jkeyboard({
        input: $('.input-newfield'),
        layout: 'special'
    });
// Flag to track whether the event listener for the "Add" button has been added
let addEventListenerAdded = false;

function showInputField() {
    if (!InputFieldIsShow) {
        newfield.style.display = 'block';
        InputFieldIsShow = true;
        const container = document.getElementById('field-content')
        container.innerHTML = '';
        const modalBox = document.querySelector('#modal-field');
        modalBox.style.top = '30%';
        const inputField = document.querySelector('.input-newfield');
        inputField.addEventListener('focus', () => {
        	keyboardField.style.display = 'block';
        })
        // Add event listener for the "Add" button if not already added
        if (!addEventListenerAdded) {
            const addnewButton = document.getElementById('addnewfield');
            addnewButton.addEventListener('click', () => {
                const newFieldValue = inputField.value.trim(); // Trim whitespace from input value
                if (newFieldValue !== '') { // Only add field if input is not empty
                    addField(newFieldValue);
                    inputField.value = ''; // Clear input field after adding field
                    newfield.style.display = 'none'; // Hide input field after adding field
                    InputFieldIsShow = false; // Reset InputFieldIsShow
                }
                keyboardField.style.display = 'none';
            });
            addEventListenerAdded = true;
        }
    } else {
        newfield.style.display = 'none';
        InputFieldIsShow = false;
    }
}

function addField(newFieldValue) {
    const storedFieldData = JSON.parse(localStorage.getItem("FieldData")) || [];
    storedFieldData.push(newFieldValue);
    localStorage.setItem("FieldData", JSON.stringify(storedFieldData));
    const modalBox = document.querySelector('#modal-field');
    modalBox.style.top = '50%';
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