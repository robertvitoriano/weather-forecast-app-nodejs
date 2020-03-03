console.log('Client side javascript file is loaded!');

const weatherForm = document.querySelector('form');
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    var local = document.querySelector('input');
    var localText = document.querySelector('.localSection');
    var forecastText = document.querySelector('.foreCastSection');

    fetch('http://localhost:3000/weather?address=' + local.value).then((response) => {
        
        response.json().then((data) => {
            console.log(data);
            ForcastData = data;

            if (data.error) {
                forecastText.innerHTML = data.error;
            }
            else {

               
                localText.innerHTML = data.location;
                forecastText.innerHTML = data.forecast;

            }
        })
    });
})
