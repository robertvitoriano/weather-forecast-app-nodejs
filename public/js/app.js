const weatherForm = document.querySelector('form');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    var local = document.querySelector('input');
    var localText = document.querySelector('.localSection');
    var forecastText = document.querySelector('.foreCastSection');
    var image = document.querySelector('img');

    fetch('/weather?address=' + local.value).then((response) => {
        
        response.json().then((data) => {
            console.log(data.imageUrl);
            ForcastData = data;

            if (data.error) {
                forecastText.innerHTML = data.error;
            }
            else {

               
                localText.innerHTML = data.location;
                forecastText.innerHTML = data.forecast;
                image.src = data.imageUrl;

            }
        })
    });
})
