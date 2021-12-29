import React, { Fragment, useEffect,useState } from 'react';
import { Note } from '../models/note';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import NoteDashboard from '../../features/NoteDashboard';

function App() {

  const [notes,setNotes] = useState<Note[]>([]); 
  useEffect( () =>{ 
  axios.get<Note[]>("http://localhost:7000/api/notes")
  .then(response =>{
    setNotes(response.data);
  })
},[])

  return (
    <Fragment>
    <NavBar />
    <Container style={{marginTop:'7em'}}>

    <NoteDashboard notes={notes}/>

    </Container>




    </Fragment>
  );
}

export default App;
