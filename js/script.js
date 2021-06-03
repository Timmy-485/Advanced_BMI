let BMI = () => {
    let weight = parseFloat(document.getElementById('weight').value)
    let height = parseFloat(document.getElementById('height').value)
    let result = parseFloat((weight/Math.pow(height,2)));
    result = result.toFixed(3);
    
    var img = document.createElement("img");
    
    


    if (result < 18.5 && result > 0){
        document.getElementById('output').value = `Your BMI is ${result}, so you are underweight.`
    }
    else if (result >= 18.5 && result <= 24.9 ){
        document.getElementById('output').value = `Your BMI is ${result}, so you are normal weight.`
    }
    else if (result >= 25 && result <= 29.9 ){
        document.getElementById('output').value = `Your BMI is ${result}, so you are overweight.`
    }
    else if (result >= 30 && result <= 34.9 ){
        document.getElementById('output').value = `Your BMI is ${result}, so you are obese.`
    }
    else if (result >= 35){
        document.getElementById('output').value = `Your BMI is ${result}, so you are extremely obese.`
    }
    else {
        document.getElementById('output').value = `Invalid Entry`;
    }

}

