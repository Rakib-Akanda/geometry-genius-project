function calculateParallelogramArea(){
    // Base value
    const parallelogramBaseInput = document.getElementById('input-Base-para');
    const parallelogramBaseTextValue = parallelogramBaseInput.value;
    const baseValue = parseFloat(parallelogramBaseTextValue);

    // Height Value
    const parallelogramHeightInput = document.getElementById('input-Height-para');
    const parallelogramHeightTextValue = parallelogramHeightInput.value;
    const heightValue = parseFloat(parallelogramHeightTextValue);

    // Area 
    const area = baseValue *heightValue;
    const parallelogramSpan = document.getElementById('Parallelogram-area');
    parallelogramSpan.innerText = area;
}