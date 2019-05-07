const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
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

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.bgBlue("Your notes:"));

    notes.forEach(note => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    const selectedNote = notes.find((note) => note.title === title);

    if (selectedNote) {
        console.log(chalk.bgBlue(selectedNote.title));
        console.log(selectedNote.body);
    } else {
        console.log(chalk.bgRed.inverse("Note not found!"));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}