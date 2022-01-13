import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import Loading from "../../app/layout/Loading";
import { useStore } from "../../app/stores/store";

import NoteList from "./NoteList";


export default observer(function NoteDashboard(){
    const {noteStore} = useStore();
    const {loadNotes,noteRegistry} = noteStore;



    useEffect( () => {
        if(noteRegistry.size <= 1)
      noteStore.loadNotes();
    },[noteRegistry.size,noteStore,loadNotes])
  
  
  if(noteStore.loadingInitial) return <Loading content='Loading notes...' />

    
    return(
        <Grid centered>
            <Grid.Column  width='10' >
        <NoteList/>
            </Grid.Column>
            
        </Grid>

    )
})