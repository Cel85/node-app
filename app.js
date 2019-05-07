const chalk = require('chalk');
const notes = require('./notes'); //exportamo 2 property u objekt notes
const yargs = require('yargs');

//customize yargs

yargs.version('1.1.0.');


//create add command
yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    //funckija koja se izvršava na add commandu
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
});
//create remove command
yargs.command({
    command: 'remove',
    describe: 'removes a note',
    builder: {
        title: {
            describe: 'Note title to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});
//create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        console.log("Listing notes...");
    }
});
//create read command
yargs.command({
    command: 'read',
    describe: 'Reads notes',
    handler() {
        console.log("Reading notes...");
    }
});
yargs.parse();
//console.log(yargs.argv);