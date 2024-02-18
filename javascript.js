function calculateBMI() {
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var height = parseFloat(heightInput.value) / 100;
    var weight = parseFloat(weightInput.value);
  
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      alert("Please enter valid height and weight values.");
      return;
    }
  
    var bmi = weight / (height * height);
    var bmiRounded = bmi.toFixed(1);
  
    var resultText;
    if (bmi < 18.5) {
      resultText = "Underweight";
    } else if (bmi < 25) {
      resultText = "Normal weight";
    } else if (bmi < 30) {
      resultText = "Overweight";
    } else {
      resultText = "Obese";
    }
  
    document.getElementById("result").innerText = "BMI: " + bmiRounded + " - " + resultText;
  }