import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';

import {Route, Switch, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NoteDetails from '../../features/notes/detailed/NoteDetails';
import NoteDashboard from '../../features/notes/NoteDashboard';
import { observer } from 'mobx-react-lite';
import NoteForm from '../../features/notes/form/NoteForm';
import HomePage from '../../features/landing/homepage';
import NotFound from '../../features/errors/NotFound';
import LoginForm from '../../features/users/LoginForm';
import { useStore } from '../stores/store';
import Loading from './Loading';
import ModalContainer from '../common/modals/ModalContainer';

function App() {
  const location = useLocation();
  const {commonStore, userStore} = useStore();

  useEffect(() => {
    if(commonStore.token){
      userStore.getUser().finally(() => commonStore.setAppLoaded())
    } else {
      commonStore.setAppLoaded();
    }
  },[commonStore,userStore])

  if(!commonStore.appLoaded) return <Loading content='Loading App...' />;

  return (
    <>
      <Route exact path='/' component={HomePage}/>
      <ToastContainer position='bottom-right' hideProgressBar /> 
      <ModalContainer />
      <Route 
      path={'/(.+)'}
      render={() => (
        <>
        
        <NavBar/>
      <Container style={{marginTop:'7em'}}>
      <Switch>
        <Route exact path='/notes' component={NoteDashboard}/>
        <Route path='/notes/:id' component={NoteDetails}/>
        <Route path='/login' component={LoginForm}/>
        
        <Route key={location.key} path={['/createNote','/manage/:id']} component={NoteForm}/>
        <Route component={NotFound} />

      </Switch>
      
      </Container>
        
        </>

      )}
      ></Route>
      
        </>

  );
}

export default observer(App);

