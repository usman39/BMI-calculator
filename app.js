document.getElementById('bmi-form').addEventListener('submit', calculateBMI);

function calculateBMI(e) {

  //UI variables
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  const result = document.getElementById('res').value;

  //constant values
  const KILOGRAMS_PER_POUND = 0.45359237;
  const METERS_PER_INCH = 0.0254;

  //compute BMI
  weightInKilograms = weight * KILOGRAMS_PER_POUND;
  heightInMeters = height * METERS_PER_INCH;
  bmi = weightInKilograms / (heightInMeters * heightInMeters);

  //display result
  if (bmi < 18.5) {
    document.getElementById('res').value = "Your BMI is " + bmi.toFixed(2) + `\nunderweight`;
  }
  else if (bmi < 25) {
    document.getElementById('res').value = "Your BMI is " + bmi.toFixed(2) + `\nNormal`;
  }
  else if (bmi < 30) {
    document.getElementById('res').value = "Your BMI is " + bmi.toFixed(2) + `\nOverweight`;
  }
  else {
    document.getElementById('res').value = "Your BMI is " + bmi.toFixed(2) + `\nObese`;
  }


  e.preventDefault();

}

