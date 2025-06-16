const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const your = document.querySelector('#your')


    if(height === ''|| height<0 || isNaN(height)){
         results.innerHTML = `Please give a valid height ${height}`;
    }else if (weight === ''|| weight<0 || isNaN(weight)){
         results.innerHTML = `Please give a valid weight ${weight}`;
    }else {
      const bmi =  (weight/((height*height)/10000)).toFixed(2)
      //show result
      results.innerHTML = `<span>${bmi}</span>`;
      if (bmi) {
        if (bmi < 18.6) {
            your.innerHTML = `BMI score is ${bmi}, you are Underweight`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            your.innerHTML = `BMI score is ${bmi}, you are in Normal range`;
        } else {
            your.innerHTML = `BMI score is ${bmi}, you are Overweight`;
        }
    }
    }

    
})