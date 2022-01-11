
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import { Button,    Header,    Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { Formik,Form } from "formik";
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';
import { Note } from "../../../app/models/note";
import Loading from "../../../app/layout/Loading";
import MyTextInput from "../../../app/common/customs/MyTextInput";

import { categoryOptions } from "../../../app/common/options/categoryOptions";
import MyTextArea from "../../../app/common/customs/MyTextArea";
import MySelectInput from "../../../app/common/customs/MySelectInput";
import MyDateInput from "../../../app/common/customs/MyDateInput";
import { format } from "date-fns";


export default observer(  function NoteForm(){
    const history = useHistory();
    const {noteStore} = useStore();
    const {createNote,updateNote,loading,loadNote,loadingInitial} = noteStore;
    const {id} = useParams<{id:string}>();

    const [note,setNote] = useState<Note>({
        id:'',
        title:'',
        body:'',
        date:null,
        category:'',
        location:''
    });

    const validationSchema = Yup.object({
        title: Yup.string().required('The note title is required'),
        body: Yup.string().required('The note body is required'),
        date: Yup.date().required('The note date is required'),
        
        
    })

    useEffect(() =>{
        if(id) loadNote(id).then(note => setNote(note!))
    },[id,loadNote]);
    

    

    function handleFormSubmit (note: Note) {
       if (note.id.length === 0 ){
           let newNote = {
               ...note,
               id: uuid()
           };
            
           createNote(newNote).then(() =>{
            history.push(`/notes/${newNote.id}`)
           })
       } else {
           updateNote(note).then(() => history.push(`/notes/${note.id}`))
       }

    }
    
    

    if(loadingInitial) return <Loading content='Loading Note..' />

    return(
        <Segment>
            <Header content='Note Details' sub color='grey' />
            <Formik 
            enableReinitialize 
            validationSchema={validationSchema}
            initialValues={note} 
            onSubmit={value => handleFormSubmit(value)}>
                {({
                     handleSubmit, isValid, isSubmitting, dirty}) =>(

                    <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
                    <MyTextInput name='title' placeholder="Title"/>
                    
                    <MyTextArea rows={3} placeholder='Body' name="body"  />
                    <MySelectInput options={categoryOptions} placeholder='Category' name="category"   />
                    <MyDateInput 
                     placeholderText='Date' 
                     name="date"
                     showTimeSelect
                     timeCaption="time" 
                     dateFormat="MMMM d, yyyy h:mm aa"
                      />
                    <Header content='Location Details' sub color='grey' />
                    <MyTextInput placeholder='Location' name="location"  />
                    <Button disabled={isSubmitting || !dirty || !isValid } loading={loading} floated="right" positive type="submit" content="Submit" />
                    <Button as={Link} to='/notes'  floated="right"  type="button" content="Cancel" />
                    </Form>
                )}

            </Formik>
            

        </Segment>
    )
}
)