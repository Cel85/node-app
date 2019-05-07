const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => "Your notes....";


const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.green.inverse("New note added...."))
    } else {
        console.log(chalk.red.inverse("Note title taken"))
    }

}

const removeNote = (title) => {
    const notes = loadNotes();
    //removes a note
    const remainingNotes = notes.filter((note) => note.title !== title);

    if (remainingNotes.length !== notes.length) { //ako je nešta pronašao, tj arrayi se razlikuju
        saveNotes(remainingNotes);
        console.log(chalk.bgGreen("Removing note with title: " + title))
    } else {
        console.log(chalk.bgRed("There is no note with name of " + title))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    //stavljamo u try-catch u slučaju da file ne postoji
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}