function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    
    if (weight && height) {
        const bmi = weight / (height * height);
        let result = `VKİ: ${bmi.toFixed(1)} - `;
        
        if (bmi < 18.5) result += "Zayıf";
        else if (bmi < 25) result += "Normal";
        else if (bmi < 30) result += "Fazla Kilolu";
        else result += "Obez";
        
        document.getElementById('result').innerHTML = result;
    } else {
        document.getElementById('result').innerHTML = "Lütfen geçerli değerler girin.";
    }
} 