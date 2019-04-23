
const chalk = require('chalk');
const getNotes = require('./notes');
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
    handler: function(argv){
        console.log('Title: '+argv.title+'\nBody: '+argv.body)
    }
});
//create remove command
yargs.command({
    command: 'remove',
    describe: 'removes a note',
    handler: function(){
        console.log('removing note...')
    }
});
//create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
        console.log("Listing notes...");
    }
});
//create read command
yargs.command({
    command: 'read',
    describe: 'Reads notes',
    handler: function(){
        console.log("Reading notes...");
    }
});
yargs.parse();
//console.log(yargs.argv);