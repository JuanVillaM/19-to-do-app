const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();

    // const duplicateNotes = notes.filter(note => note.title === title);
    const duplicateNote = notes.find(note => note.title === title);

    // const duplicateNotes = notes.filter(function(note) {
    //     return note.title === title;
    // });

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
    } else {
        console.log(chalk.red.inverse('Note title already taken!'));
    }


};

const removeNotes = (title) => {
    const notes = loadNotes();

    remainingNotes = notes.filter(note => note.title !== title);

    // remainingNotes = notes.filter(function(note) {
    //     return note.title !== title;
    // });

    if (notes.length > remainingNotes.length) {
        console.log(chalk.green.inverse('Note: "' + title + '" removed'));
        saveNotes(remainingNotes);
    } else {
        console.log(chalk.red.inverse('Note: "' + title + '" not found'));
    }

};

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.inverse('Your notes:'));
    notes.forEach((note) => {
        console.log(chalk.blue('Title: ' + note.title));
    });

};

const readNote = (title) => {

    const notes = loadNotes();

    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(chalk.inverse('Note title: ' + note.title));
        console.log(chalk.inverse('Note body: ' + note.body));
    } else {
        console.log(chalk.red.inverse('Note not found'));
    }

};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);

    console.log(chalk.green('Action saved successfully!'));
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (err) {
        return [];
    }

};

module.exports = {
    addNote: addNote,
    readNote: readNote,
    listNotes: listNotes,
    removeNotes: removeNotes
};