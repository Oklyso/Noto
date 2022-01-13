import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Header, Item, Segment} from 'semantic-ui-react'
import { history } from '../../..';
import { Note } from '../../../app/models/note';
import { useStore } from '../../../app/stores/store';

interface Props {
    note: Note;
}





export default observer (function NoteDetailedHeader({note}: Props) {

    const {noteStore} = useStore();
    const {deleteNote} = noteStore;

function handleDelete (id:string)
{
    deleteNote(id).then(() => history.push('/notes'));
}




    return (
        <Segment.Group>
            <Segment attached='top' style={{opacity:0.90,background:'linear-gradient(90deg, rgba(91,132,177,0.21713350867690828) 0%, rgba(252,118,106,0.6681139008337711) 100%)',padding: '0',textAlign:'center'}}>
                
                <Segment basic >
                    <Item.Group>
                        <Item>
                            <Item.Content >
                                <Header
                                    
                                    size='huge'
                                    style={{color: 'white',textAlign:'center'}}
                                >{note.title}</Header>
                                
                                
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button as={Link} to={`/manage/${note.id}`} color='orange' >
                    Edit Note
                </Button>
                <Button onClick={() => handleDelete(note.id)} type="submit"  color='red' floated='right'>
                    Delete Note
                </Button>
            </Segment>
        </Segment.Group>
    )
})