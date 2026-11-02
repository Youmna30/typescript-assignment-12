"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    password;
    phone;
    age;
    notebooks = [];
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        if (age >= 18 && age <= 60) {
            this.age = age;
        }
        else {
            throw new Error("Age must be between 18 and 60.");
        }
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
    displayNotebooks() {
        this.notebooks.forEach((notebook, index) => {
            console.log(`Notebook ${index + 1}:`);
            notebook.displayNotes();
        });
    }
    displayInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Age: ${this.age}`);
    }
}
class Admin extends User {
    constructor(id, name, email, password, phone, age) {
        super(id, name, email, password, phone, age);
    }
    manageNotes() {
        console.log("Admin can manage notes.");
    }
}
class Note {
    id;
    title;
    content;
    author;
    constructor(id, title, content, author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
    }
    preview() {
        const contentLenght = this.content.length;
        if (contentLenght > 20) {
            this.content = this.content.substring(0, 20) + "...";
        }
        console.log(`Title: ${this.title} with content: ${this.content}...`);
    }
    getId() {
        return this.id;
    }
    getAuthor() {
        return this.author;
    }
}
class NoteBook {
    notes = [];
    addNote(note) {
        this.notes.push(note);
    }
    displayNotes() {
        this.notes.forEach(note => note.preview());
    }
    removeNote(noteId) {
        const index = this.notes.findIndex(note => note.getId() === noteId);
        if (index !== -1) {
            this.notes.splice(index, 1);
            console.log("Note removed successfully!");
        }
        else {
            console.log("Note not found!");
        }
    }
}
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    getAllItems() {
        return this.items;
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log("Item removed successfully!");
        }
        else {
            console.log("Item not found!");
        }
    }
}
//Main Testing
const user = new User(1, "John", "john@gmail.com", "password123", "07123456789", 25);
const admin = new Admin(2, "Admin", "admin@gmail.com", "admin123", "07123456789", 30);
const note = new Note(1, "Note Title", "This is the content of the note. It can be quite long, but we will preview it.", user);
const noteBook = new NoteBook();
user.displayInfo();
admin.manageNotes();
note.preview();
noteBook.displayNotes();
noteBook.addNote(note);
noteBook.removeNote(1);
noteBook.removeNote(5); // Note not found
noteBook.displayNotes();
noteBook.addNote(new Note(3, "New Note", "This is a new note added to the notebook.", user));
noteBook.displayNotes();
user.addNotebook(noteBook);
user.displayNotebooks();
note.getAuthor().displayInfo();
const stringStorage = new Storage();
stringStorage.addItem("Hello");
stringStorage.addItem("Welcome");
stringStorage.addItem("TypeScript");
console.log(stringStorage.getAllItems());
stringStorage.removeItem("Hello");
console.log(stringStorage.getAllItems());
