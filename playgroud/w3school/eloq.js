/*
let hash = "#";
for (let i = 1; i < 7; i++) {
    console.log(hash);
    hash += '#';
}


Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
 For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

"When you have that working, modify your program to print "FizzBuzz" for numbers that are
 divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those)."



for (let i = 1; i < 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    }

    if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


var grid2 = "";
for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
        if ((i == 1 || i == 4) || (j < 2 || j > 7)) {
            grid2 += "#";
        } else {
            grid2 += " ";
        }
    }
    grid2 += "\n";
}
console.log(grid2)
*/

const fact = (n) => {
    if (n == 1) {
        return 1;
    }
    return n * fact(n - 1);
}

const person = {
    ime: "marko",
    prezime: "rašeta",
    dob: 34
}
//const auti = ['bmnw', 'golf', 'audi']

//console.log(Math.min(1, 4, 555, -6))

//const min = (x, y) => Math.min(x, y)
/*
const isEven = (x) => {

    if (x < 0) {
        x *= x
    }
    if (x == 1) {
        return false
    }

    if (x == 0) {
        return true
    }
    return isEven(x - 2)
}


const string = "marko";



const countChar = (string, char) => {
    let count = 0;
    for (s of string) {
        if (s === char) {
            count++;
        }
    }
    return count;
}

const arr = [3, 4, 5, 5]
arr.push(74);

arr.pop()
arr.pop()
for (a of arr) {
    console.log(a)
}

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
}
//delete day1.events;
let journal = [];

function addEntry(events, squirrel) {
    journal.push({
        events,
        squirrel
    });
}



const range = (start, end, step = 1) => {
    let arr = []
    if (start > end) {
        for (let i = start; i >= end; i += step) {
            arr.push(i)
        }
    } else {
        for (let i = start; i <= end; i += step) {
            arr.push(i)
        }
    }
    return arr;
}

console.log(range(1, 8, 2));

const sum = (array) => {
    let sum = 0;
    for (element of array) {
        sum += element
    }
    return sum;
}

//console.log(sum([2, 3, 4, 5]))



const reverseArray = (array) => {
    let newArray = [];
    for (let i = 0, j = array.length - 1; i <= array.length - 1; i++, j--) {
        newArray[i] = array[j];
    }
    return newArray;
}

const reverseArrayInPlace = (array) => {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var old = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = old;
    }
    return array;
}
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

const me = {
    name: "marko",
    age: 27,
    greet: function () {
        console.log('Hi my name is ' + this.name)
    }
}
const obj = {
    value: 3,
    bla: "d"
}


function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(4, console.log)
*/





function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}
/*Higheer-order functions start to shine when you need to compose operations. As an example, let’s write code that finds the average
 year of origin for
 living and dead scripts in the data set.

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;

}

console.log(Math.round(average(
    SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1165
console.log(Math.round(average(
    SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 204




const stariAuti = auti.filter(x => x.godina < 1998);
const autiGodina = auti.map(x => x.godina)
const prosjek = auti.map(x => x.godina).reduce((a, b) => a + b) / autiGodina.length
console.log(prosjek);
*/
const auti = [{
        model: "bmw kockica",
        godina: 1994,
        boja: "metalik crna",
        snaga_KW: 120,
        broj_vratiju: 5,
        oprema: ['el. podizači', 'tempomat']
    },
    {
        model: "lanica delta",
        godina: 1991,
        boja: "plava",
        snaga_KW: 180,
        broj_vratiju: 3,
        oprema: ['el. podizači']
    },
    {
        model: "fiat puno",
        godina: 1999,
        boja: "siva",
        snaga_KW: 60,
        broj_vratiju: 4,
        oprema: ['el. podizači', 'kuka']
    }
]
const popis = ['kruh', 'jaja', 'mlijeko', 'namaz'];




const kvadrirajNeparne = (val) => (val % 2 != 0) ? val * val : val;

const mijenjajAute = (val, index, array) => {
    return {
        model: "fiat puno",
        godina: 1999,
        boja: array[index].boja,
        snaga_KW: 60,
        broj_vratiju: 4,
        oprema: ['el. podizači', 'kuka']
    }
}

// console.log(auti.map((val, index, array) => {
//     return {
//         model_auta: val.oprema,
//         godina_auta: array[index].godina + 20,
//         boja: array[index].boja,
//         snaga_KW: array[index].snaga_KW,
//         broj_vratiju: val.broj_vratiju,
//         oprema: val.oprema
//     }
// }))

let data = [{
        country: 'China',
        population: 1409517397,
    },
    {
        country: 'India',
        population: 1339180127,
    },
    {
        country: 'USA',
        population: 324459463,
    },
    {
        country: 'Indonesia',
        population: 263991379,
    }
]

// const vece = data.filter((val) => val.population > 500000000)
// console.log(vece);

let arr = [
    [1, 2, 3],
    [4, 5],
    [6]
];


/**
 * Write a higher-order function loop that provides something like a for loop statement. 
 * It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop
 *  value and stops if that returns false. Then it calls the body function, giving it the current value.
 *  Finally, it calls the update function to create a new value and starts from the beginning.
    When defining the function, you can use a regular loop to do the actual looping.
 */

// let loop = (value, test, update, body) => {
//     for (let i = 0; i < value; i++) {
//         if (test) {
//             body(value)
//             update(value);
//         } else {
//             break;
//         }
//         return loop(update(value), test, update, body);
//     }

// }


const every = (array, test) => {
    for (let element of array) {
        if (!test(element)) {
            return false;
        }
    }
    return true;
}



const ar = [
    [1, 2],
    [3, 4],
    [5, 6]
];

//const SCRIPTS = require('./scripts');
//console.log(poljenko.reduce((acc, val) => acc * val))

// for (script of SCRIPTS) {
//     console.log(script)
// }


// let zeko = {}
// zeko.pozdrav = (izjava) => {
//     console.log(izjava)
// }

// function speak(line) {
//     console.log(`The ${this.type}  says '${line}'`);
// }

// let whiteRabbit = {
//     type: "beli zeko",
//     speak
// }

// let brownRhino = {
//     type: "smeđi nosorog",
//     speak
// }

// console.log(brownRhino.speak('ruuuu'))

// let protoRabbit = {
//     speak(line) {
//         console.log(`The ${this.type} rabbit says '${line}'`);
//     },
//     alive: true,
//     numTheeth: 4
// }
// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("SKREEEE!");
// console.log(killerRabbit.alive)
// let protoRabbit = {
//     speak(line) {
//         console.log(`The ${this.type} rabbit says '${line}'`);
//     }
// };

// function makeRabbit(type) {
//     let rabbit = Object.create(protoRabbit);
//     rabbit.type = type;
//     return rabbit;
// }
// console.log(makeRabbit('plavi zeko').speak('ciao beella'))

// function Person(name) {
//     this.name = name
// }




// function makeAdder(x) {

//     function add(y) {
//         return y + x;
//     };

//     return add;
// }
// var plusOne = makeAdder(1);

function test(para) {
    console.log(typeof foo); // function pointer
    console.log(typeof govno); // undefined
    console.log(typeof para); // undefined
    var foo = 'hello'
    console.log(typeof foo);

    var govno = 'govno'

    bar = function () {
        return 'world'
    };

    function foo() {
        return 'hello'
    }

    function x(x) {
        return x;
    }
}

test(3)

///////////////////////////////////////////////////////////////
//pozove se funkcija
//kriera se execution context
//ulazimo u creation stage: skenira funkciju
//1. provjerava argumente, inicijalizira parametar i pridodaje vriejdnos
//2. provjerava defincije funkcija i kreira variajvle koej se referenciraju na mem. loakciju
//3. provjertava ima li variajbli, ako da setira ih na undefined
//ulazimo u aktivacijski korak gdje proidruzujemo vrijednosrt varijablama, redak po redak
///////////////////////////////////////////////////////////////////////////