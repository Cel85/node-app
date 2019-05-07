/*const square = function (x) {
    return x * x;
}
*/

/*const square = (x) => {
    return x * x;
}

const square = (x) => x * x;

console.log(square(12));

*/


const event = {
    name: 'markov rockas',
    guestList: ['marko', 'andy', 'grco'],
    printGuestlist() {
        console.log('Guest list for ' + this.name);

        this.guestList.forEach((gosti) => {
            console.log(gosti + ' dolazi na ' + this.name);
        })
    }
}

event.printGuestlist()