const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ac70b495820747c6e463df76ef7819bc/' + latitude + ',' + longitude+'?lang=pt'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Não foi possível conectar-se ao serviço. Verifique sua conexão', undefined)
        } else if (body.error) {
            callback('Não foi possível encontrar o local', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' Atualmente está ' + ((body.currently.temperature-32)/1.8).toFixed(1) + ' Graus. Há ' + body.currently.precipProbability+'% chance de chuva e haverá '+body.daily.summary+'.');
        }
    })
}

module.exports = forecast;