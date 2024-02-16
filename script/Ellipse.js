function calculateEllipseArea(){
    // a
    const ellipseA = document.getElementById('input-a-ellipse');
    const ellipseAValue = ellipseA.value;
    const a = parseFloat(ellipseAValue);
    // b
    const ellipseB = document.getElementById('input-b-ellipse');
    const ellipseBValue = ellipseB.value;
    const B = parseFloat(ellipseBValue);
    
    // area 
    const pi = 3.1416
    const area = pi * a* B

    const ellipseSpan = document.getElementById('ellipse-area');
    ellipseSpan.innerText = area;
}