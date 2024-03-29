let currentLine = 0;
function resetLine(){
    currentLine = 0;
    updateMiddlePosition();
}
function lineToLeft() {
    currentLine++;
    if(currentLine>14){
        currentLine = 14;
        console.log('Cant moving line to the left anymore');
    }
    updateMiddlePosition();
    // console.log(`Current line: ${currentLine}`);
}

function lineToRight() {
    currentLine--;
    if(currentLine<-13){
        currentLine = -13;
        console.log('Cant moving line to the right anymore');
    }
    updateMiddlePosition();
    // console.log(`Current line: ${currentLine}`);
}

function updateMiddlePosition() {
    const middleElement = document.getElementById('middle');
    const lineElement = document.querySelector('.line');

    const middleWidth = middleElement.offsetWidth;
    const lineOffset = currentLine * (lineElement.offsetWidth + 16); // Assuming margin-left and margin-right is 8px

    const newPosition = `calc(49% - ${middleWidth / 2 + lineOffset}px)`;
    middleElement.style.left = newPosition;
}
