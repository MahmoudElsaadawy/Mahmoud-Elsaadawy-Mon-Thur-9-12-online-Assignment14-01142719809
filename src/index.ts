//1 and 5 (notebook and user relation)
class User {
  private noteBooks: NoteBook[] = []

  constructor(
    public id: number,
    public name: string,
    private email: string,
    private password: string,
    protected phone: string,
    public age: number,
  ) {
    if (age < 18 || age > 60) {
      throw new Error("age must be between 18 and 60");
    }
  }

  public displayInfo(): void {
    console.log(`id: ${this.id}, name:${this.name}, age: ${this.age}`);
  }

  public addNoteBook(noteBook: NoteBook): void {
    this.noteBooks.push(noteBook);
  }

  public removeNoteBook(noteBook: NoteBook): void {
    this.noteBooks = this.noteBooks.filter((nb) => nb !== noteBook);
  }
}

//2
class Admin extends User {
  public managedNotes(): void{
  console.log("managing notes");
  }
}

//3 and 6(note and user relation)
class Note{
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public userId: User,
  ) {}

  public preview(): string{
    return this.content.substring(0, 10) + "..."
  }
}

//4
class NoteBook{
  public notes: Note[] = []
  
  public addNote(id: number, title: string, content: string, user: User):void {
    const note = new Note(id, title, content, user)
    this.notes.push(note)
  }

  public removeNote(noteId: number):void {
    this.notes = this.notes.filter((note)=> note.id != noteId)
  }
}

//7
class Storage<T> {
  private items: T[] = []

  addItem(item: T): void{
    this.items.push(item)
  }

  removeItem(item: T): void{
    this.items = this.items.filter((i)=> i != item)
  }

  getAllItems(): T[]{
    return this.items
  }
}

//2 identify relationships
//  1) Inheritance (Admin => User)
//  2) Composition (Note => NoteBook)
//  3) Aggregation (NoteBook => User)
//  4) Association (User => Note)