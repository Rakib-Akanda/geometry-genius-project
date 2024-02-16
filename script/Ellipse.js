// function calculateEllipseArea(){
//     // a
//     const ellipseA = document.getElementById('input-a-ellipse');
//     const ellipseAValue = ellipseA.value;
//     const a = parseFloat(ellipseAValue);
//     // b
//     const ellipseB = document.getElementById('input-b-ellipse');
//     const ellipseBValue = ellipseB.value;
//     const B = parseFloat(ellipseBValue);
    
//     // area 
//     const pi = 3.1416
//     const area = pi * a* B

//     const ellipseSpan = document.getElementById('ellipse-area');
//     ellipseSpan.innerText = area;
// }

//UporerTuko system-1; ek function er moddhe kora hoche.


// function calculateEllipseArea(){
//     const base = getEllipseBaseB();
//     console.log(base);
// }


// function getEllipseBaseB (){
//     const baseInput = document.getElementById('input-b-ellipse');
//     const baseInputText = baseInput.value;
//     const b = parseFloat(baseInputText);
//     return b;
// }

// function calculateEllipseArea(){
//     const pi = 3.1416;
//     const base = getInputValueById('input-b-ellipse');
//     const a = getInputValueById('input-a-ellipse');
//     const area = pi * a * base;
//     console.log(area);
//     setInnerTextById('ellipse-area', area);
// }

// function getInputValueById(inputFiledId){
//     const inputField = document.getElementById(inputFiledId);
//     const inputFieldText = inputField.value;
//     const inputValue = parseFloat(inputFieldText);
//     return inputValue;
// }
// function setInnerTextById(elementId, area){
//     const element = document.getElementById(elementId);
//     element.innerText = area;
// }






function calculateEllipseArea(){
    const majorRadius = getInputValueById('input-a-ellipse');
    const minorRadius = getInputValueById('input-b-ellipse');
    const area = 3.1416 * majorRadius * minorRadius;
    setInnerText("ellipse-area", area); 
}

// eita function call kore  kaj kora hoiche. html theke dom use kore data nie eshe just formula ta lekha hoiche.  and setInnerText function call kore area set kora hoiche. 
