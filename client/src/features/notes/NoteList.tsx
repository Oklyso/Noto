import { observer } from "mobx-react-lite";
import React, { Fragment } from "react";
import { Header } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import NoteListItem from "./NoteListItem";

export default observer(function NoteList(){
    const {noteStore} = useStore();
    const {groupedNotes} = noteStore;


   
    
    return(
        <>
        {groupedNotes.map(([group,notes]) => (
            <Fragment  key={group}>
                <Header sub inverted style={{color:'#5B84B1FF'}}>
                    {group}
                </Header>
             
            {notes.map(note => ( 
                <NoteListItem  key={note.id} note={note} />
                ))}
       
            </Fragment>
        ))}
        
                  </>
    )
})