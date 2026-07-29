"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    password;
    phone;
    age;
    noteBooks = [];
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
        if (age < 18 || age > 60) {
            throw new Error("age must be between 18 and 60");
        }
    }
    displayInfo() {
        console.log(`id: ${this.id}, name:${this.name}, age: ${this.age}`);
    }
    addNoteBook(noteBook) {
        this.noteBooks.push(noteBook);
    }
    removeNoteBook(noteBook) {
        this.noteBooks = this.noteBooks.filter((nb) => nb !== noteBook);
    }
}
class Admin extends User {
    managedNotes() {
        console.log("managing notes");
    }
}
class Note {
    id;
    title;
    content;
    userId;
    constructor(id, title, content, userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview() {
        return this.content.substring(0, 10) + "...";
    }
}
class NoteBook {
    notes = [];
    addNote(id, title, content, user) {
        const note = new Note(id, title, content, user);
        this.notes.push(note);
    }
    removeNote(noteId) {
        this.notes = this.notes.filter((note) => note.id != noteId);
    }
}
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter((i) => i != item);
    }
    getAllItems() {
        return this.items;
    }
}
