import { format } from "date-fns";
import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Note } from "../models/note";
import { User } from "../models/user";


export default class NoteStore {
    noteRegistry = new Map<string,Note>();
    selectedNote : Note | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;


constructor(){
    makeAutoObservable(this)
}

get notesByDate(){
    return Array.from(this.noteRegistry.values()).sort((a,b) => 
    a.date!.getTime() - b.date!.getTime());
}


get groupedNotes() {
    return Object.entries(
        this.notesByDate.reduce((notes, note) => {
            const date = format(note.date!,'dd MMM yyyy');
            notes[date] = notes[date] ?  [...notes[date], note] : [note];
            return notes; 
        },{} as {[key:string]: Note[]})
    )
}


loadNotes = async () => {
    this.loadingInitial = true;

    try{
        const notes = await agent.Notes.list();
        

            notes.forEach(note =>{
                this.setNote(note);

              })
              this.setLoadingInitial(false);
        

    }catch(error){
        


            this.setLoadingInitial(false);
        
        console.log(error);

    }

}

loadNote = async(id:string) =>{
    let note = this.getNote(id);
    if(note){
        this.selectedNote = note;
        return note;
    }else{
        this.loadingInitial = true;
        try {
            note = await agent.Notes.details(id);
            this.setNote(note!);
            runInAction(() =>{

                this.selectedNote = note;
                this.setLoadingInitial(false);
                return note;
            })
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }
}

private getNote = (id:string) =>{
    return this.noteRegistry.get(id);
}

private setNote = (note:Note) => {
    note.date = new Date(note.date!);
    this.noteRegistry.set(note.id,note);
}

setLoadingInitial = (state:boolean) => {
    this.loadingInitial = state;
}



createNote = async (note: Note) =>{
    this.loading = true;
    
    try {
        await agent.Notes.create(note);
        runInAction(() => {
            this.noteRegistry.set(note.id,note);
            this.selectedNote = note;
            this.editMode = false;
            this.loading = false;
        })
    } catch (error) {
        console.log(error);

        runInAction(() =>{
            this.loading = false;
        })
        
    }

}

updateNote = async(note:Note) => { 
    this.loading = true;
    try {
        await agent.Notes.update(note);
        runInAction(() => {
            this.noteRegistry.set(note.id,note);
            this.selectedNote = note;
            this.editMode = false;
            this.loading = false;
            
        })
    } catch (error) {
        console.log(error);
        runInAction(() =>{
            this.loading = false;
        })
        
    }
}

    deleteNote = async (id:string) => {
        this.loading = true;
        try {
            await agent.Notes.delete(id);
            runInAction(()=>{
                this.noteRegistry.delete(id);
                

            })
        } catch (error) {
            console.log(error);
            runInAction(()=>{
                this.loading = false;
            })
        }
    
}

}