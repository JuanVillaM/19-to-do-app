const yargs = require('yargs');
const notes = require('./notes.js');

// Customizing Yargs Version
yargs.version('1.1.0');

// Add notes
yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Body title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Remove notes
yargs.command({
    command: 'remove',
    description: 'Remove a new note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title);
    }
});

//  List notes
yargs.command({
    command: 'list',
    description: 'List all the notes',
    handler() {
        notes.listNotes();
    }
});

// Read notes
yargs.command({
    command: 'read',
    description: 'Read a note',
    builder: {
        title: {
            description: 'Read note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.parse();

// console.log(yargs.argv);