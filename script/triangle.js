/**
 * Objective: Get base, height of a triangle. calculate the area by using  the provided formula. and display the area.
 * 
 * step-1: get base value of the triangle.
 * step-2: added an id in the base input filed.
 * step-3: use getElementById to access the input filed.
 * step-4: get value from the input field.(value in string now )
 * step-5: convert the value to a number. use parseFloat.
 * 
 */
function calculateTriangleArea() {
  //get triangle base value
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);

  //get triangle height value
  const triangleHeightInput = document.getElementById('triangle-height');
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  console.log(height);

  //triangle area 
  const triangleArea = 0.5 * base * height ;

  //display triangle area
  const triangleAreaSpan = document.getElementById('triangle-area');
  triangleAreaSpan.innerText =  triangleArea;

}