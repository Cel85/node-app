const request = require('request')



const url = 'https://api.darksky.net/forecast/084add42797cda53764666754b63824a/45.45,15.95?units=si&lang=hr'
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Zagreb.json?access_token=pk.eyJ1IjoiY2VsZXJpcyIsImEiOiJjanZ6YzFobXMwbXl2NGJtcW45NjVjaWh2In0.TERSrWgQTNLkJUfqODkJQg&limit=1'



// request({
//     url: url,
//     json: true
// }, (error, response, body) => {
//     if (error) {
//         console.log("Unable to connect");
//     } else if (body.code === 400) {
//         console.log(body.error);
//     } else {

//         console.log(body.daily.data[0].summary + ' Trenutno je ' + body.currently.temperature + ' stupnjeva s ' + body.currently.precipProbability + '% šanse za kisu.');
//     }
// })


request({

    url: geocodeUrl,
    json: true
}, (error, response, body) => {

    if (error) {
        console.log("Unable to connect");
    }
    const longitude = body.features[0].center[0];
    const latitude = body.features[0].center[1];
    console.log(longitude + ',' + latitude);

});