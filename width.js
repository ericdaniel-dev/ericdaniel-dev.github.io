const WidthData = [
	{ name: 'Implement 1',
		description: 'Width 900cm'},
	{ name: 'Implement 2',
		description: 'Width 750cm'},
	{ name: 'Implement 3',
		description: 'Width 450cm'},
];
let CurrentWidth = 0;
function setCurrentWidth(index){
	CurrentWidth = index;
}
function deleteWidth(index){
	if(index >= 0 && index < WidthData.length){
		WidthData.splice(index, 1);
	}
}
function selectwidths(){
	closeModal('selectwidth');
	console.log(CurrentWidth);
/*	alert(`Successfully select width ${WidthData[CurrentWidth].description}`);*/
}
const example = document.getElementById('width-content');
let previousSelected = null;
WidthData.forEach(function(item, index) {
    var divElement = document.createElement('div');
    divElement.innerHTML = `<img src="./assets/Tagar.svg" alt="tagar icon"/><div class="selections"><span>${item.name}</span><span>${item.description}</span></div>`;
    divElement.onclick = function(){
    	setCurrentWidth(index);
    	if(previousSelected){
    		previousSelected.classList.remove('width-selected');
    	}
    	divElement.classList.add('width-selected');
    	previousSelected = divElement;
    }
    example.appendChild(divElement);
});