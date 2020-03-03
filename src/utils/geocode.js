const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoicm9iZXJ0dml0b3JpYW5vIiwiYSI6ImNrNjVtdWNxczA3bm0zbG1pdHNwencybDcifQ.S317y6oHBWgSY8egvl-AFg'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Não foi possível conectar-se ao serviço. Verifique sua conexão', undefined)
        } else if (body.features.length === 0) {
            callback('Não foi possível encontrar a localização, tente novamente', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode