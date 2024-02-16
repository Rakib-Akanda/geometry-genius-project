function calculatePentagonArea(){
    const perimeter = getInputValueById('input-p-pentagon');
    const apothem = getInputValueById('input-b-pentagon');
    const area = 0.5 * perimeter * apothem;
    setInnerText('pentagon-area', area);

}
function getInputValueById(inputFiledId){
    const inputFiled = document.getElementById(inputFiledId);
    const inputValueText =  inputFiled.value;
    const value = parseFloat(inputValueText);
    return value;
}
function setInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}