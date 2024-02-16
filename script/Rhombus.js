function calculateRhombusArea(){
    // D1
    const rhombusD1Input = document.getElementById('input-D1-rhombus');
    const rhombusD1Text = rhombusD1Input.value;
    const diagonal1 = parseFloat(rhombusD1Text);

    // D2
    const rhombusD2Input = document.getElementById('input-D2-rhombus');
    const rhombusD2Text = rhombusD2Input.value;
    const diagonal2 = parseFloat(rhombusD2Text);

    // Area 
    const area = 0.5 * diagonal1 * diagonal2;
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area;

}