import React from "react";
import { Grid } from "semantic-ui-react";
import { Note } from "../app/models/note";
import NoteList from "./NoteList";


interface Props {
    notes: Note[];
}

export default function NoteDashboard({notes} : Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <NoteList notes={notes} />
            </Grid.Column>
        </Grid>
    )
}