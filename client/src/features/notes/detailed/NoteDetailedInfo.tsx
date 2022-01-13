import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React from 'react'
import {Segment, Grid, Icon} from 'semantic-ui-react'
import { Note } from '../../../app/models/note';



interface Props {
    note: Note
}

export default observer(function NoteDetailedInfo({note}: Props) {
    return (
        <Segment.Group>
            <Segment attached='top'>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' style={{color:'#5B84B1FF'}} name='info'/>
                    </Grid.Column>
                    <Grid.Column width={15} style={{overflowWrap: 'break-word'}}>
                        <p>{note.body}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='calendar' size='large' style={{color:'#5B84B1FF'}}/>
                    </Grid.Column>
                    <Grid.Column width={15}>
            <span>
              {format(note.date!,'dd MMM yyyy h:mm aa')}
            </span>
                    </Grid.Column>
                </Grid>
            </Segment>
            {note.location ? (
            <Segment attached>
                <Grid verticalAlign='middle'>
                    <Grid.Column width={1}>
                        <Icon name='marker' size='large' style={{color:'#5B84B1FF'}}/>
                    </Grid.Column>
                    
                        <Grid.Column width={11}>
                        <span>{note.location}</span>
                    </Grid.Column>
                  
                </Grid>
            </Segment>
              ):null
            }
                
        </Segment.Group>
    )
})