function calculateBodyFat() {
    const gender = document.getElementById('gender').value;
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (gender && age && weight && height) {
        const bmi = weight / ((height / 100) * (height / 100));
        let bodyFat;
        
        if (gender === 'male') {
            bodyFat = (1.20 * bmi) + (0.23 * age) - 16.2;
        } else {
            bodyFat = (1.20 * bmi) + (0.23 * age) - 5.4;
        }
        
        let result = `Tahmini Vücut Yağ Oranı: %${bodyFat.toFixed(1)}`;
        document.getElementById('result').innerHTML = result;
    } else {
        document.getElementById('result').innerHTML = "Lütfen tüm alanları doldurun.";
    }
} 