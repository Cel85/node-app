
const chalk = require('chalk');
const getNotes = require('./notes');
const yargs = require('yargs');

//customize yargs

yargs.version('1.1.0.');


//create add command
yargs.command({
    command: 'add',
    describe: 'add new note',
    handler: function(){
        console.log('adding new note')
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

console.log(yargs.argv);