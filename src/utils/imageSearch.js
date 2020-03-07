const request = require('request');
const imageSearch =(location,callback)=>{  

var API_KEY = '15511740-9028e1c324358d1390df991e2';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(location);

request({url:URL,json:true},(error,{body})=>{
    if(error||!body)
    return callback(error,undefined)

    callback(undefined,{imageUrl:body.hits[0].webformatURL})



})



}




module.exports = imageSearch;