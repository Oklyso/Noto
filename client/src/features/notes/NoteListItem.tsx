import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Note } from "../../app/models/note";

interface Props{
    note: Note
}


export default function NoteListItem({note} : Props) {
   

    return(
        
                  <Segment.Group style={{width:'100%',alignItem:'center'}}>
                    <Segment>
                        <Item.Group>
                            <Item>
                                {/* <Item.Image size='tiny' circular src='/assets/user.png' / > */}
                                <Item.Content>
                                    <Item.Header style={{textAlign:'center',fontSize:'32px',fontFamily:'Darker Grotesque',width:'100%'}} as={Link} to={`/notes/${note.id}`}>{note.title}</Item.Header>
                                    
                                </Item.Content>

                                
                            </Item>
                        </Item.Group>
                        <Segment compact raised clearing>
                        <span style={{overflowWrap: 'break-word'}}>
                            {note.body}
                            
                        </span>
                    </Segment>

                    </Segment>
                    <Segment >
                        <span  style={{fontSize:'12px',fontWeight:'lighter',textAlign:'center'}}>
                             {format(note.date!,'dd MMM yyyy h:mm aa')}
                            <Button
                             inverted
                             as={Link} 
                             to={`/notes/${note.id}`}
                             color='orange'
                             floated='right'
                             content='View'
                             />
                            <br/>
                            
                            <Icon inverted name='marker' color='orange'/> {note.location}
                            
                            
                        </span>
                    </Segment>
                    
                    

                  </Segment.Group>
    )


}