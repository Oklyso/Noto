import { format } from "date-fns";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Note } from "../../app/models/note";
import {PrismAsync as SyntaxHighlighter} from 'react-syntax-highlighter';
//import {tomorrow} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {materialLight} from 'react-syntax-highlighter/dist/esm/styles/prism'

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
                         <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                children={note.body}
                                
                                components={{

                            // This SyntaxHighlighter-addition comes straight from their github.

                                code({node, inline, className, children, ...props}) {
                                    const match = /language-(\w+)/.exec(className || '')
                                    return !inline && match ? (
                                    <SyntaxHighlighter
                                        children={String(children).replace(/\n$/, '')}
                                        style={materialLight}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    />
                                    ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                    )
                                }
                                }}
                            />
                            
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