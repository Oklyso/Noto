import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Loading from "../../../app/layout/Loading";
import { useStore } from "../../../app/stores/store";



import NoteDetailedHeader from "./NoteDetailedHeader";
import NoteDetailedInfo from "./NoteDetailedInfo";





export default observer(function NoteDetails(){
  const {noteStore} = useStore();
  const {selectedNote:note,loadNote,loadingInitial} = noteStore;
  const {id} = useParams<{id:string}>();


useEffect(() => {
  if(id)loadNote(id);
},[id,loadNote]);

  if(loadingInitial || !note) return <Loading />;
  
    return(
      <Grid centered>
        <Grid.Column width={10} >
          <NoteDetailedHeader note={note}/>
          <NoteDetailedInfo note={note} />
        </Grid.Column>
        
        
      </Grid>

    )
}
)