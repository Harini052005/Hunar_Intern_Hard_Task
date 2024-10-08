function calculateBMI() {
    
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight && height) {
        // Calculate BMI
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }
        
        document.getElementById('result').textContent = `Your BMI is ${bmi} (${category})`;
    } else {
        document.getElementById('result').textContent = 'Please enter your weight and height.';
    }
}
