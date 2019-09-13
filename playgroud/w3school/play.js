// const neparni = (x) => {
//     if (x % 2 != 0) {
//         return x;
//     }
// }

// function neparni2(x) {
//     if (x % 2 != 0) {
//         return x;
//     }
// }
// const polje = [2, 3, 4, 5, 6, 7, 8]

// const novoPolje = polje.filter(neparni2)
// const novoPolje2 = [11, 12, 13, 14, 14, 15].filter(neparni2)
// const novoPolje3 = [11, 55, 132, 11, 9, 15].filter(x => {
//     if (x % 2 != 0) {
//         return x;
//     }
// })
//console.log(novoPolje3)



//loop kroz objekt osoba
// for (x in osoba) {
//     console.log(osoba[x]);
// }

// var cars = [1, 'Volvo', 'Mini'];
// //var x;

// for (q of cars) {
//     console.log(q)
// }

// const string = 'test'
// console.log(`nešto smrdi u ${(string.length < 3) ? 'mrkva' : 'sir'}`);

// class Osoba {
//     constructor(ime) {
//         this.ime = ime;
//     }
// }
// const prvi = new Osoba('marko');
// console.log(typeof (prvi))

class Osoba {
    constructor(_ime) {
        this.ime = _ime
        this.prezime = 'rašeta'
    }
    hello() {
        return `bok ja sam ${this.ime}`
    }
}

class Teacher extends Osoba {
    constructor(_ime, _prezime, _subject) {
        super(_ime)
        this.prezime = _prezime
        this.subject = _subject
    }
    get subject() {
        return this.subject;
    }

    set subject(newSubject) {
        this._subject = newSubject;
    }
}

const ja = new Osoba('marko')
const c = new Teacher('Ana', 'Anić', 'OOP')
console.log(ja.hello())


Osoba.prototype.farewell = () => 'pozdravvv' + ja.ime
Osoba.prototype.isAlive = true;
ja.bojKose = 'zelena'
Teacher.prototype.zaposlena = true;
//console.log(ja.isAlive)
//console.log(prof.zaposlena)
console.log(snape.subject)