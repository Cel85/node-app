
const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');//učitavam datoteku u binarnom obliku
const dataJSON = dataBuffer.toString();//pretvaram u string
const data = JSON.parse(dataJSON);//parsiram u objekt

data.name = "marko";
data.age = 34;

const WriteJSON = JSON.stringify(data); //prebacujem u string

fs.writeFileSync('1-json.json', WriteJSON);//zapisujem u file