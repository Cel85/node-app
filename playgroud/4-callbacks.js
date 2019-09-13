setTimeout(() => {
    console.log("istekle 2 sekunde");
}, 2000)

const names = ['marko', 'andy', 'grco', 'miroslava']

const shortNames = names.filter((name) => {
    return name.length <= 4;
})


const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})