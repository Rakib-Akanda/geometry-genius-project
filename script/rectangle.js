function calculateRectangleArea(){
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    
    // rectangle area
    const area = width * length;
    
    const rectangleSpan = document.getElementById('rectangle-area');
    console.log(rectangleSpan);
    rectangleSpan.innerText = area;
}