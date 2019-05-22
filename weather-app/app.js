const request = require('request')



const url = 'https://api.darksky.net/forecast/084add42797cda53764666754b63824a/37.8267,-122.4233'

request({
    url: url
}, (error, response, body) => {
    const data = JSON.parse(body)
    console.log(data.hourly.data)
})