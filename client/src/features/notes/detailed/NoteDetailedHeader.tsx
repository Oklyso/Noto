import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Header, Item, Segment} from 'semantic-ui-react'
import { Note } from '../../../app/models/note';


/* const noteImageStyle = {
    filter: 'brightness(30%)'
};

const noteImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
}; */

interface Props {
    note: Note;
}

export default observer (function NoteDetailedHeader({note}: Props) {
    return (
        <Segment.Group>
            <Segment    attached='top' style={{opacity:0.90,background:'linear-gradient(90deg, rgba(91,132,177,0.21713350867690828) 0%, rgba(252,118,106,0.6681139008337711) 100%)',padding: '0'}}>
                
                <Segment basic  className='ui center aligned'>
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
                <Button as={Link} to={`/manage/${note.id}`} color='red' floated='right' >
                    Manage Note
                </Button>
            </Segment>
        </Segment.Group>
    )
})