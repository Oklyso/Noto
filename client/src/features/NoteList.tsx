import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Note } from "../app/models/note";
interface Props {
    notes: Note[];
}
export default function NoteList({notes} :Props){
    return(
        <Segment>
            <Item.Group divided>
            {notes.map(note =>
                <Item key={note.id}>
                    <Item.Content>
                        <Item.Header as='a'>
                        {note.title}
                        </Item.Header>
                        <Item.Meta>{note.date}</Item.Meta>
                        <Item.Description>
                            <div>{note.body}</div>
                            <div>{note.location}</div>
                            
                        </Item.Description>
                        <Item.Extra>
                            <Button floated='right' content='View' color='blue' />
                            <Label basic content={note.category} />
                        </Item.Extra>
                    </Item.Content>
                </Item>
                )}
            </Item.Group>
        </Segment>
    )
}